import { createWrapper, HYDRATE } from "next-redux-wrapper";

const initialState = ["hi from cart state"];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
