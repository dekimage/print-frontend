import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "../reducers/Reducer";

const initialState = {
  store: {},
};

const Store = ({ children }) => {
  const [store, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[store, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
