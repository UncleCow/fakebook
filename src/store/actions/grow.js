export const ADDPOST = "ADDPOST";

export const addPost = async (data) => {
  return fetch("http://localhost:8080/FakeStory/api/admin/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id:0, content:data.content, image: data.image, user: data.user_id, react: 0}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

export const reactPost = async(data) => {
    return fetch("http://localhost:8080/FakeStory/api/admin/react", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({type: data.type, user:data.user, post: data.post}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

