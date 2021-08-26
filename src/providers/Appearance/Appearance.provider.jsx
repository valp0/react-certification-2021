import React, { createContext, useContext, useEffect, useReducer } from "react";
import { storage } from "../../utils/fns";
import appearanceReducer, { initialAppearance } from "./appearanceReducer";

const AppearanceContext = createContext(null);

function useAppearance() {
  const context = useContext(AppearanceContext);
  if (!context) {
    throw new Error(`Can't use "useAppearance" without an AppearanceProvider!`);
  }
  return context;
}

const AppearanceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appearanceReducer, initialAppearance);

  useEffect(() => {
    storage.set('appearance', state);
  }, [state]);

  return (
    <AppearanceContext.Provider value={[state, dispatch]}>
      {children}
    </AppearanceContext.Provider>
  );
}

export { useAppearance };
export default AppearanceProvider;
