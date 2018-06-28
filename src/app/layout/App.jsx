import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    // This is javaScript jsx. Renders as a javaScript bundle
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
