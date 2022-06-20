import React from "react";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import UsersListContainer from "./UsersList/UsersListContainer";

function Users(props) {
  return (
    <main>
      <section>
        <SearchBarContainer />
        <UsersListContainer />
      </section>
    </main>
  )
}

export default Users;