const LOAD_USERS = "LOAD_USERS";
const CHANGE_FOLLOWED_STATUS = "CHANGE_FOLLOWED_STATUS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const CHANGE_CURRENT_PAGE_CONTROL_OFFSET = "CHANGE_CURRENT_PAGE_CONTROL_OFFSET";

let initialState = {
  currentPage: 1,
  currentPageControlOffset: 0,
  usersList: [],
  followedList: [],
  // { userID: 1, name: "Sasha", onlineStatus: true, friendStatus: false },
  // { userID: 2, name: "Julia", onlineStatus: true, friendStatus: false },
  // { userID: 3, name: "Ira", onlineStatus: false, friendStatus: true },
  // { userID: 4, name: "Mark", onlineStatus: false, friendStatus: false },
  // { userID: 5, name: "John", onlineStatus: true, friendStatus: false },
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS: {
      let stateCopy = { ...state };
      stateCopy.usersList = [];
      action.usersList.forEach((user) => stateCopy.usersList.push(user));
      return stateCopy;
    }

    case CHANGE_FOLLOWED_STATUS: {
      let stateCopy = { ...state };
      stateCopy.usersList = stateCopy.usersList.map((user) => {
        if (user.id === action.id) {
          user.followed = !user.followed;
          stateCopy.followedList.push(user);
        }
        return user;
      });
      return stateCopy;
    }

    case CHANGE_CURRENT_PAGE: {
      let stateCopy = { ...state };
      stateCopy.currentPage = action.currentPage;
      return stateCopy;
    }

    case SET_TOTAL_COUNT: {
      let stateCopy = { ...state };
      stateCopy.totalCount = action.totalCount;
      return stateCopy;
    }

    case CHANGE_CURRENT_PAGE_CONTROL_OFFSET: {
      let stateCopy = { ...state };
      stateCopy.currentPageControlOffset += action.addition ? 5 : -5;

      if (stateCopy.currentPageControlOffset < 0) {
        stateCopy.currentPageControlOffset = 0;
      } else if (stateCopy.currentPageControlOffset > stateCopy.totalCount) {
        stateCopy.currentPageControlOffset = stateCopy.totalCount - 5;
      }

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

function changeCurrentPageAC(page) {
  return {
    type: CHANGE_CURRENT_PAGE,
    currentPage: page,
  };
}

function setTotalCountAC(totalCount) {
  return {
    type: SET_TOTAL_COUNT,
    totalCount: totalCount,
  };
}

function changeCurrentPageControlOffsetAC(addition) {
  return {
    type: CHANGE_CURRENT_PAGE_CONTROL_OFFSET,
    addition: addition,
  };
}

export {
  usersReducer,
  loadUsersAC,
  changeFollowedStatusAC,
  changeCurrentPageAC,
  setTotalCountAC,
  changeCurrentPageControlOffsetAC,
  initialState as usersList,
};
