import { createStore, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import cart from "./reducers/cart";

// create your reducer
const reducer = (state = { tick: "init" }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "TICK":
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context) =>
  createStore(
    combineReducers({
      cart,
    })
  );

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
