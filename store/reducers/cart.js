import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SET_CART_FROM_LOCAL_STORAGE,
  SET_HISTORY_FROM_LOCAL_STORAGE,
  CLEAR_CART,
  MOVE_TO_HISTORY,
} from "../actions/cart";

const initialState = { cart: [], history: [] };

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...payload };
    case SET_CART_FROM_LOCAL_STORAGE:
      return { ...state, cart: [...payload] };
    case SET_HISTORY_FROM_LOCAL_STORAGE:
      return { ...state, history: [...payload] };
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
    case MOVE_TO_HISTORY:
      const newHistory = [...state.cart];
      return {
        history: newHistory,
        cart: [],
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
