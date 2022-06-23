const LOAD_USERS = "LOAD_FRIENDS";
const CHANGE_FOLLOWED_STATUS = "CHANGE_FRIEND_STATUS";

let initialState = [
  // { userID: 1, name: "Sasha", onlineStatus: true, friendStatus: false },
  // { userID: 2, name: "Julia", onlineStatus: true, friendStatus: false },
  // { userID: 3, name: "Ira", onlineStatus: false, friendStatus: true },
  // { userID: 4, name: "Mark", onlineStatus: false, friendStatus: false },
  // { userID: 5, name: "John", onlineStatus: true, friendStatus: false },
];

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS: {
      let stateCopy = [...state];
      action.usersList.forEach((user) => stateCopy.push(user));
      return stateCopy;
    }

    case CHANGE_FOLLOWED_STATUS: {
      let stateCopy = [...state];
      stateCopy = stateCopy.map((user) => {
        if (user.id === action.id) {
          user.followed = !user.followed;
        }
        return user;
      });
      return stateCopy;
    }

    default: {
      return state;
    }
  }
}

function loadUsersAC(usersList) {
  return {
    type: LOAD_USERS,
    usersList: usersList,
  };
}

function changeFollowedStatusAC(id) {
  return {
    type: CHANGE_FOLLOWED_STATUS,
    id: id,
  };
}

export {
  usersReducer,
  loadUsersAC,
  changeFollowedStatusAC,
  initialState as usersList,
};
