import { types } from "../../utils/constants";
import { storage } from "../../utils/fns";

const initialAccount = {
  loginFailed: false,
  modal: false,
  authenticated: storage.get('account')?.authenticated || false,
  user: storage.get('account')?.user || '',
  name: storage.get('account')?.name || '',
  userAvatar: storage.get('account')?.userAvatar || '',
  favorites: storage.get('account')?.favorites || { wizeline: {}, poncho: {}, dummy: {} }
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        authenticated: true
      }

    case types.USER_LOGOUT:
      return {
        ...state,
        authenticated: false
      }

    case types.LOGIN_FAILED:
      return {
        ...state,
        loginFailed: true
      }

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginFailed: false
      }

    case types.USER_SETAVATAR:
      return {
        ...state,
        userAvatar: action.avatar
      }

    case types.USER_UNSETAVATAR:
      return {
        ...state,
        userAvatar: ''
      }

    case types.USER_SETNAME:
      return {
        ...state,
        user: action.user,
        name: action.name
      }


    case types.USER_UNSETNAME:
      return {
        ...state,
        user: '',
        name: ''
      }

    case types.OPEN_MODAL:
      return {
        ...state,
        modal: true
      }

    case types.CLOSE_MODAL:
      return {
        ...state,
        modal: false
      }

    case types.ADD_TO_FAVS:
      state.favorites[state.user][action.id] = {
        id: action.id,
        thumbnail: action.thumbnail,
        title: action.title,
        description: action.description
      }
      return {
        ...state,
      }


    case types.REMOVE_FROM_FAVS:
      delete state.favorites[state.user][action.id];
      return {
        ...state,
      }

    default:
      return state;
  }
}

export { initialAccount };
export default accountReducer;
