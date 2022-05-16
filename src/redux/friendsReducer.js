let friendsList = [
  { userID: 1, name: "Sasha", onlineStatus: true },
  { userID: 2, name: "Julia", onlineStatus: true },
  { userID: 3, name: "Ira", onlineStatus: false },
  { userID: 4, name: "Mark", onlineStatus: false },
  { userID: 5, name: "John", onlineStatus: true },
];

let initialState = friendsList;

function friendsReducer(state = initialState, action) {
  return state;
}

export { friendsReducer, friendsList };
