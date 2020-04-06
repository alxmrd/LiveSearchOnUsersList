export const SEARCH_INPUT = "SEARCH_INPUT";

const searchInputReducer = (state = null, action) => {
  switch (action.type) {
    case SEARCH_INPUT:
      return action.payload;

    default:
      return state;
  }
};

export default searchInputReducer;
