import { types } from "../../utils/constants";
import { storage } from "../../utils/fns";

const initialSearch = {
  query: storage.get('search')?.query || 'wizeline'
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case types.QUERY:
      return {
        ...state,
        query: action.term
      };

    default:
      return state;
  }
}

export { initialSearch };
export default searchReducer;
