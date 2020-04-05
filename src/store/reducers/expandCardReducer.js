export const EXPANDED_ID = "EXPANDED_ID";

const expandCardReducer = (state = null, action) => {
  switch (action.type) {
    case EXPANDED_ID:
      return action.payload;

    default:
      return state;
  }
};

export default expandCardReducer;
