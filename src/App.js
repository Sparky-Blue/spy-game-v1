import React, { Component } from "react";
import "./App.css";
import Desktop from "./components/Desktop";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFolder,
  faFile,
  faStar,
  faEnvelope,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

library.add(faFile, faFolder, faStar, faEnvelope, faGlobe);

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
