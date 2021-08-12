import { types } from "../../utils/constants";

const initialState = {
  darkMode: false,
  loggedIn: false,
  sideMenu: false
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

    default:
      return state;
  }
}

export { initialState };
export default stateReducer;
