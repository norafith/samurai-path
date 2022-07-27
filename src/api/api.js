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
    return Promise.all([
      apiInstance.get(`profile/${id}`),
      apiInstance.get(`profile/status/${id}`),
    ])
      .then((result) => {
        result[0] = result[0].data;
        result[1] = result[1].data;
        return result;
      })
      .then((result) => {
        return { ...result[0], status: result[1] };
      });
  },

  setStatus(status) {
    return apiInstance
      .put("profile/status", {
        status: status,
      })
      .then((result) => result.data);
  },

  changeAvatarPhoto(avatar) {
    const formData = new FormData();
    formData.append("image", avatar);

    return apiInstance
      .put("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => result.data);
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

  loginAuth(login, password, rememberMe) {
    return apiInstance
      .post("auth/login", {
        email: login,
        password: password,
        rememberMe: rememberMe,
      })
      .then((result) => {
        result.data.data.id = result.data.data.userId;
        delete result.data.data.userId;
        return result.data;
      });
  },

  logout() {
    return apiInstance.delete("auth/login").then((result) => result.data);
  },
};

export { profileAPI, usersAPI, authAPI };
