import { types } from "../utils/constants";

const SearchFns = (dispatch) => ({
  search(query) {
    dispatch({ type: types.QUERY, term: query });
  }
});

const AppearanceFns = (dispatch) => ({
  toggleDark() {
    dispatch({ type: types.TOGGLE_DARK });
  },

  showMenu() {
    dispatch({ type: types.SHOW_MENU });
    dispatch({ type: types.HIDE_CTNT });
  },

  hideMenu() {
    dispatch({ type: types.HIDE_MENU });
    dispatch({ type: types.SHOW_CTNT });
  }
});

const AccountFns = (dispatch) => ({
  openModal() {
    dispatch({ type: types.OPEN_MODAL });
  },

  closeModal() {
    dispatch({ type: types.CLOSE_MODAL });
    dispatch({ type: types.LOGIN_SUCCESS });
  },

  login(name, user, avatar) {
    dispatch({ type: types.USER_LOGIN });
    dispatch({ type: types.USER_SETAVATAR, avatar: avatar });
    dispatch({ type: types.USER_SETNAME, name: name, user: user });
  },

  logout() {
    dispatch({ type: types.USER_LOGOUT });
    dispatch({ type: types.USER_UNSETAVATAR });
    dispatch({ type: types.USER_UNSETNAME });
    dispatch({ type: types.CLOSE_MODAL });
  },

  failedLogin() {
    dispatch({ type: types.LOGIN_FAILED });
  },

  unsetFailedLogin() {
    dispatch({ type: types.LOGIN_SUCCESS });
  },

  addFav({ id, thumbnail, title, description }) {
    dispatch({ type: types.ADD_TO_FAVS, id, thumbnail, title, description });
  },

  removeFav(id) {
    dispatch({ type: types.REMOVE_FROM_FAVS, id })
  }
});

export { SearchFns, AppearanceFns, AccountFns };
