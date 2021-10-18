import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayListBootstrap from "./Projects/BirthdayListBootstrap/BirthdayList";
import Accordion from "./Projects/Accordion/Accordion";
import Navbar from "./Projects/Navbar/Navbar";
import Home from "./Home";
import Error from "./Error";
import SimpleList from "./Projects/SimpleList/SimpleList";
import ToursIntro from "./Projects/ToursIntro/ToursIntro";
import ReviewsBootstrap from "./Projects/ReviewsBootstrap/ReviewsBootstrap";
import TypeRacer from "./Projects/TypeRacer/TypeRacer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/type-racer">
            <TypeRacer />
          </Route>
          <Route exact path="/navbar">
            <Navbar />
          </Route>
          <Route exact path="/accordion">
            <Accordion />
          </Route>
          <Route exact path="/reviews-bootstrap">
            <ReviewsBootstrap />
          </Route>
          <Route exact path="/tours-intro">
            <ToursIntro />
          </Route>
          <Route exact path="/birthday-list-bootstrap">
            <BirthdayListBootstrap />
          </Route>
          <Route exact path="/simple-list">
            <SimpleList />
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
