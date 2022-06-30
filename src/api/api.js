import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "8ef37fda-1577-4784-a323-4a2da600bd86",
  },
});

const profileAPI = {
  getProfile(id) {
    return apiInstance.get(`profile/${id}`).then((result) => result.data);
  },
};

const usersAPI = {
  getFriends() {
    return apiInstance.get("users?friend=true").then((result) => result.data);
  },

  getUsers(page) {
    return apiInstance
      .get(`users?count=5&page=${page}`)
      .then((result) => result.data);
  },

  followUser(id) {
    return apiInstance.post(`follow/${id}`).then((result) => result.data);
  },

  unfollowUser(id) {
    return apiInstance.delete(`follow/${id}`).then((result) => result.data);
  },
};

const authAPI = {
  authCurrUser() {
    return apiInstance.get("auth/me").then((result) => result.data);
  },
};

export { profileAPI, usersAPI, authAPI };
