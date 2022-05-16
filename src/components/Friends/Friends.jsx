import React from "react";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import FriendsListContainer from "./FriendsList/FriendsListContainer";

function Friends(props) {
  return (
    <main>
      <section>
        <SearchBarContainer />
        <FriendsListContainer />
      </section>
    </main>
  )
}

export default Friends;