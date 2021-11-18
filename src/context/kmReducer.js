import { ADD_KM } from "./types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_KM:
      return {
        ...state,
        kmsInfo: [...state.kmsInfo, payload],
        loading: false,
      };

    default:
      return state;
  }
};
