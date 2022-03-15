import { AUTHENTICATION } from "../actions/auth";

const initState = {
  user: null,
  userId: null,
  test: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATION: {
      // console.log("action", action);
      // console.log("id", action.id);
      state = { ...state, userId: action.id };
      break;
    }
    case "SAVEUSER": {
      console.log("action", action);
      console.log("user", action.user);
      state = {
        ...state,
        user: action.user,
      };
      break;
    }
  }
  // console.log("state", state);
  return state;
};
