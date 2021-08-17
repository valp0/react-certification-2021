import React, { createContext, useEffect, useReducer } from "react";
import { storage } from "../../utils/fns";
import stateReducer, { initialState } from "./stateReducer";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    storage.set('context', state);
  }, [state]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext };
export default StateProvider;
