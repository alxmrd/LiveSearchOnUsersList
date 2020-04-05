import { FETCH_USERS } from "../actions/types";

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
