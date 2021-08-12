import React, { createContext, useReducer } from "react";
import stateReducer, { initialState } from "./stateReducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext };
export default StateProvider;
