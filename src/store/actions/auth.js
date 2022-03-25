import { useDispatch } from "react-redux";
export const AUTHENTICATION = "AUTHENTICATION";

export const login = async (username, password) => {
  let mess = "";
  return fetch("http://localhost:8080/FakeStory/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      ;
      return data;
    });
};

// export const getUser

// const test = (test) => {
//     return (dispatch) => {
//         dispatch({type: "test", test: test})
//     }
// }
