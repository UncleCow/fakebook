export const FETCHFRIENDS = "FETCHFRIENDS";
export const FETCHPOSTS = "FETCHPOSTS";
export const FETCHBASICINFO = "FETCHBASICINFO";
export const FETCHALLGROUPBYUSER = "FETCHALLGROUPBYUSER";
export const FETCHALLPAGEBYUSER = "FETCHALLPAGEBYUSER";

export const fetchFriends = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/friend?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const fetchPost = async (id) => {
    return fetch(`http://localhost:8080/FakeStory/api/admin/post?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export const fetchAllInfo = async (id) => {
    return fetch(`http://localhost:8080/FakeStory/api/admin/user?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
export const fetch9Friends = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/FindUserByUserId?id=${id}&number=9`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
}
export const fetchNumberFriends = async (id, number) => {
  return fetch(`http://localhost:8080/FakeStory/FindUserByUserId?id=${id}&number=${number}`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
}
export const fetchAllGroupByUser = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/FindGroupByUserId?id=${id}`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
}

export const fetchAllUserInfo = async (id) => {
  return fetch(`http://localhost:8080/FakeStory/api/admin/user?id=${id}`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
}
