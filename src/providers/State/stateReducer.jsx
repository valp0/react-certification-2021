import { types } from "../../utils/constants";
import { storage } from "../../utils/fns";

const initialState = storage.exists() ? storage.get('context') : {
  darkMode: false,
  query: 'wizeline',
  loggedIn: false,
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_DARK_ON:
      return {
        ...state,
        darkMode: true
      };

    case types.TOGGLE_DARK_OFF:
      return {
        ...state,
        darkMode: false
      };

    case types.SEARCH:
      return {
        ...state,
        query: action.term
      }

    case types.USER_LOGIN:
      return {
        ...state,
        loggedIn: true
      }

    case types.USER_LOGOUT:
      return {
        ...state,
        loggedIn: false
      }

    default:
      return state;
  }
}

export { initialState };
export default stateReducer;
