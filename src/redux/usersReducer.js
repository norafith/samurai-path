import { usersAPI } from "../api/api";

const LOAD_USERS = "LOAD_USERS";
const CHANGE_FOLLOWED_STATUS = "CHANGE_FOLLOWED_STATUS";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const CHANGE_CURRENT_PAGE_CONTROL_OFFSET = "CHANGE_CURRENT_PAGE_CONTROL_OFFSET";
const SET_FETCHING_STATE = "SET_FETCHING_STATE_USERS";
const TOGGLE_USER_FOLLOWING_STATE = "TOGGLE_USER_FOLLOWING_STATE";
const DISABLE_USER_FOLLOWING_STATE = "DISABLE_USER_FOLLOWING_STATE";

let initialState = {
  currentPage: 1,
  currentPageControlOffset: 0,
  usersList: [],
  isFetching: false,
  followingUsers: [],
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
        }
        return user;
      });
      return stateCopy;
    }

    case TOGGLE_USER_FOLLOWING_STATE: {
      let stateCopy = { ...state };
      stateCopy.followingUsers = [...stateCopy.followingUsers, action.userId];
      return stateCopy;
    }

    case DISABLE_USER_FOLLOWING_STATE: {
      let stateCopy = { ...state };
      stateCopy.followingUsers = stateCopy.followingUsers.filter(
        (item) => item !== action.userId
      );
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

    case SET_FETCHING_STATE: {
      let stateCopy = { ...state };
      stateCopy.isFetching = action.isFetching;
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
    totalCount,
  };
}

function changeCurrentPageControlOffsetAC(addition) {
  return {
    type: CHANGE_CURRENT_PAGE_CONTROL_OFFSET,
    addition,
  };
}

function setFetchingStateAC(isFetching) {
  return {
    type: SET_FETCHING_STATE,
    isFetching,
  };
}

function toggleUserFollowingStateAC(userId) {
  return {
    type: TOGGLE_USER_FOLLOWING_STATE,
    userId,
  };
}

function disableUserFollowingStateAC(userId) {
  return {
    type: DISABLE_USER_FOLLOWING_STATE,
    userId,
  };
}

function getUsersThunkCreator(page) {
  return function getUsersThunk(dispatch, getState) {
    dispatch(setFetchingStateAC(true));
    usersAPI.getUsers(page).then((result) => {
      dispatch(loadUsersAC(result.items));
      dispatch(setTotalCountAC(result.totalCount));
      dispatch(setFetchingStateAC(false));
    });
  };
}

function changeFollowedStatusThunkCreator(followed, id) {
  return function changeFollowedStatusThunk(dispatch, getState) {
    const currActionPromise = followed
      ? usersAPI.unfollowUser(id)
      : usersAPI.followUser(id);
    dispatch(toggleUserFollowingStateAC(id));
    currActionPromise.then((result) => {
      dispatch(changeFollowedStatusAC(id));
      dispatch(disableUserFollowingStateAC(id));
    });
  };
}

export {
  usersReducer,
  loadUsersAC,
  changeFollowedStatusAC,
  changeCurrentPageAC,
  setTotalCountAC,
  changeCurrentPageControlOffsetAC,
  setFetchingStateAC,
  disableUserFollowingStateAC,
  toggleUserFollowingStateAC,
  getUsersThunkCreator,
  changeFollowedStatusThunkCreator,
};
