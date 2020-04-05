export const FETCH_USERS = "FETCH_USERS";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;

    default:
      return state;
  }
};

export default usersReducer;
