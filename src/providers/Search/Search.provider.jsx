import React, { createContext, useContext, useEffect, useReducer } from "react";
import { storage } from "../../utils/fns";
import searchReducer, { initialSearch } from "./searchReducer";

const SearchContext = createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialSearch);

  useEffect(() => {
    storage.set('search', state);
  }, [state]);

  return (
    <SearchContext.Provider value={[state, dispatch]}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };
export default SearchProvider;
