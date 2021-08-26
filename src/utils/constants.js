const AUTH_STORAGE_KEY = 'wa_cert_authenticated';

const types = {
  TOGGLE_DARK: "toggleDark",
  HIDE_CTNT: "unfocusCtnt",
  SHOW_CTNT: "focusCtnt",
  HIDE_MENU: "hideMenu",
  SHOW_MENU: "showMenu",
  QUERY: 'query',
  USER_LOGIN: 'login',
  USER_LOGOUT: 'logout',
  LOGIN_FAILED: 'failedLogin',
  LOGIN_SUCCESS: 'successLogin',
  USER_SETAVATAR: 'setAvatar',
  USER_UNSETAVATAR: 'unsetAvatar',
  USER_SETNAME: 'setName',
  USER_UNSETNAME: 'unsetName',
  ADD_TO_FAVS: 'addVidToFavs',
  REMOVE_FROM_FAVS: 'removeFromFavs',
  CLOSE_MODAL: 'closeModal',
  OPEN_MODAL: 'openModal'
};

export { AUTH_STORAGE_KEY, types };
