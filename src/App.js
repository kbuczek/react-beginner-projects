import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayListBootstrap from "./Projects/BirthdayListBootstrap/BirthdayList";
import Accordion from "./Projects/Accordion/Accordion";
import Navbar from "./Projects/Navbar/Navbar";
import Home from "./Home";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/birthday-list-bootstrap">
            <BirthdayListBootstrap />
          </Route>
          <Route exact path="/accordion">
            <Accordion />
          </Route>
          <Route exact path="/navbar">
            <Navbar />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
