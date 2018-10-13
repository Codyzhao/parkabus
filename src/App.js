import React, { Component } from "react";
import Park from "./components/Park";
import "./App.css";
import "./css/grid.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Park />
      </div>
    );
  }
}

export default App;
