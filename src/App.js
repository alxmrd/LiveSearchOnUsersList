import React from "react";
import LogoAppBar from "./components/AppBar.js";
import SearchBar from "./components/SearchBar.js";
import UsersList from "./components/UsersList.js";

function App() {
  return (
    <div className="App">
      <LogoAppBar />
      <SearchBar />
      <UsersList />
    </div>
  );
}

export default App;
