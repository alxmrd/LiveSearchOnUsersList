import { FETCH_USERS } from "../actions/types";
import { EXPANDED_ID } from "../actions/types";
import { SEARCH_INPUT } from "../actions/types";
import store from "../store";
export const fetchUsers = dispatch => {
  fetch("http://jsonplaceholder.typicode.com/users", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(result => result.json())

    .then(res =>
      dispatch({
        type: FETCH_USERS,
        payload: res
      })
    )

    .catch(error => {
      alert("Error", error);
    });
};

export const expandCard = id => dispatch => {
  const state = store.getState();
  if (state.id == null || state.id !== id) {
    dispatch({
      type: EXPANDED_ID,
      payload: id
    });
  } else {
    dispatch({
      type: EXPANDED_ID,
      payload: null
    });
  }
};

export const searchOnList = searchInput => dispatch => {
  dispatch({
    type: SEARCH_INPUT,
    payload: searchInput
  });
};
