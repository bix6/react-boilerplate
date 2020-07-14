import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

// WebSocket Setup
/*
import io from "socket.io-client";
import config from "./config";
const socket = io.connect(config.API_ENDPOINT);
*/

class App extends React.Component {
  render() {
    return (
      <>
        <h1>App</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </>
    );
  }
}

export default App;
