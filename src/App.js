import React, { Component } from "react";
import "./App.css";
import Desktop from "./components/Desktop";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SettingsMenu /> */}
        <Desktop />
      </div>
    );
  }
}

export default App;
