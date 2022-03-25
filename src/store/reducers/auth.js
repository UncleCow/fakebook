import { AUTHENTICATION } from "../actions/auth";

const initState = {
  user: null,
  userId: null,
  test: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATION: {
      // ;
      // ;
      state = { ...state, userId: action.id };
      break;
    }
    case "SAVEUSER": {
      ;
      ;
      state = {
        ...state,
        user: action.user,
      };
      break;
    }
  }
  // ;
  return state;
};
