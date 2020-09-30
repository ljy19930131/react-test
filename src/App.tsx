import React from "react";
import "./App.css";

import Home from "./page/Home";
import List from "./page/List";
import Person from "./page/Person";

function App() {
  return (
    <div className="App">
      <Home />
      <List />
      <Person />
    </div>
  );
}

export default App;
