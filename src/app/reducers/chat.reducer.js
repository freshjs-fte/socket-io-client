import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MESSAGES_REQUEST:
    case ACTION_TYPES.SEND_MESSAGE_REQUEST: {
      return { ...state, isLoading: true };
    }

    case ACTION_TYPES.SEND_MESSAGE_ERROR:
    case ACTION_TYPES.GET_MESSAGES_ERROR: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.error.error,
      };
    }

    case ACTION_TYPES.GET_MESSAGES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        list: action.payload,
      };
    }

    case ACTION_TYPES.SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        list: [...state.list, action.payload],
      };
    }

    default:
      return state;
  }
};

export default chatReducer;
