import {
  LOGIN,
  LOGIN_SUCCESS,
  VERIFY,
  VERIFY_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
} from '../ActionTypes';

const initialState = {
  verify: false,
  loginStatus: false,
  otp: '',
  checkoutArr: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginStatus: action.loginStatus,
        otp: action.otp,
        loading: false,
      };
    }
    case VERIFY: {
      return {
        ...state,
        loading: true,
      };
    }
    case VERIFY_SUCCESS: {
      return {
        ...state,
        loading: false,
        verify: action.verify,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        verify: action.verify,
        loginStatus: action.loginStatus,
        otp: '',
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
