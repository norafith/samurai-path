import React from "react";
import SearchBarContainer from "./SearchBar/SearchBarContainer";
import UsersListStoreContainer from "./UsersList/UsersListStoreContainer";

function Users(props) { 
  return (
    <main>
      <section>
        <SearchBarContainer />
        <UsersListStoreContainer />
      </section>
    </main>
  )
}

export default Users;