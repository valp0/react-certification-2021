import { types } from "../../utils/constants";
import { storage } from "../../utils/fns";

const initialAppearance = {
  darkMode: storage.get('appearance')?.darkMode || window.matchMedia('(prefers-color-scheme: dark)').matches,
  sideMenu: false,
  hideContent: false
};

const appearanceReducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_DARK:
      return {
        ...state,
        darkMode: !state.darkMode
      };

    case types.HIDE_MENU:
      return {
        ...state,
        sideMenu: false
      };

    case types.SHOW_MENU:
      return {
        ...state,
        sideMenu: true
      };

    case types.HIDE_CTNT:
      return {
        ...state,
        hideContent: true
      };

    case types.SHOW_CTNT:
      return {
        ...state,
        hideContent: false
      };

    default:
      return state;
  }
}

export { initialAppearance };
export default appearanceReducer;
