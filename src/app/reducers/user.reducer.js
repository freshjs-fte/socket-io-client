import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  data: {},
  isLoggedIn: false,
  isLoading: false,
  errorMessage: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_REQUEST:
    case ACTION_TYPES.LOGIN_REQUEST:
    case ACTION_TYPES.REGISTER_REQUEST: {
      return { ...state, isLoading: true, errorMessage: null };
    }

    case ACTION_TYPES.GET_USER_ERROR:
    case ACTION_TYPES.LOGIN_ERROR:
    case ACTION_TYPES.REGISTER_ERROR: {
      return { ...state, isLoading: false, errorMessage: action.payload.error };
    }

    case ACTION_TYPES.GET_USER_SUCCESS:
    case ACTION_TYPES.LOGIN_SUCCESS:
    case ACTION_TYPES.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
