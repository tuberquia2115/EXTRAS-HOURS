import { useReducer } from "react";
import { reducer } from "./reducer";

export const useStateContainer = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const change = () => {
      dispatch({
          type: 'hola'
      })
  };

  return {
    data: {...state},
    mutations: {
      change,
    },
  };
};
