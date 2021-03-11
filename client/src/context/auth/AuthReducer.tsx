import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

type Actions =
  | {
      type: 'REGISTER_SUCCESS';
      payload: { token: string };
    }
  | {
      type: 'REGISTER_FAIL';
      payload: string;
    }
  | {
      type: 'USER_LOADED';
      payload: string;
    }
  | {
      type: 'AUTH_ERROR';
      payload?: string;
    }
  | {
      type: 'LOGIN_SUCCESS';
      payload: { token: string };
    }
  | {
      type: 'LOGIN_FAIL';
      payload: string;
    }
  | {
      type: 'LOGOUT';
      payload?: string;
    }
  | {
      type: 'CLEAR_ERRORS';
    };

interface AuthState {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: {
    name: string;
    id: string;
  };
  error: string;
}

const AuthReducer = (state: AuthState, action: Actions) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
