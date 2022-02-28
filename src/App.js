import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayListBootstrap from "./Projects/BirthdayListBootstrap/BirthdayList";
import Accordion from "./Projects/Accordion/Accordion";
import PhotoSlider from "./Projects/PhotoSlider/PhotoSlider";
import Navbar2 from "./Projects/Navbar2/Navbar2";
import Navbar from "./Projects/Navbar/Navbar";
import Home from "./Home";
import Error from "./Error";
import SimpleList from "./Projects/SimpleList/SimpleList";
import ToursIntro from "./Projects/ToursIntro/ToursIntro";
import ReviewsBootstrap from "./Projects/ReviewsBootstrap/ReviewsBootstrap";
import TypeRacer from "./Projects/TypeRacer/TypeRacer";
import MemoryGame from "./Projects/MemoryGame/MemoryGame";
import Menu from "./Projects/Menu/Menu";
import Tabs from "./Projects/Tabs/Index";

import Link1 from "./Projects/Navbar2/pages/Link1";
import Link2 from "./Projects/Navbar2/pages/Link2";
import Link3 from "./Projects/Navbar2/pages/Link3";
import Link4 from "./Projects/Navbar2/pages/Link4";
import Dropdown1 from "./Projects/Navbar2/pages/Dropdown1";
import Dropdown2 from "./Projects/Navbar2/pages/Dropdown2";
import Dropdown3 from "./Projects/Navbar2/pages/Dropdown3";
import Dropdown11 from "./Projects/Navbar2/pages/Dropdown11";
import Dropdown22 from "./Projects/Navbar2/pages/Dropdown22";
import Dropdown33 from "./Projects/Navbar2/pages/Dropdown33";

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
          <Route exact path="/memory-game">
            <MemoryGame />
          </Route>
          <Route exact path="/photo-slider">
            <PhotoSlider />
          </Route>
          <Route exact path="/navbar2">
            <Navbar2 />
          </Route>
          <Route exact path="/navbar">
            <Navbar />
          </Route>
          <Route exact path="/tabs">
            <Tabs />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/accordion">
            <Accordion />
          </Route>
          <Route exact path="/reviews">
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
          <Route exact path="/link-1">
            <Navbar2 />
            <Link1 />
          </Route>
          <Route exact path="/link-2">
            <Navbar2 />
            <Link2 />
          </Route>
          <Route exact path="/link-3">
            <Navbar2 />
            <Link3 />
          </Route>
          <Route exact path="/link-4">
            <Navbar2 />
            <Link4 />
          </Route>
          <Route exact path="/dropdown-1">
            <Navbar2 />
            <Dropdown1 />
          </Route>
          <Route exact path="/dropdown-2">
            <Navbar2 />
            <Dropdown2 />
          </Route>
          <Route exact path="/dropdown-3">
            <Navbar2 />
            <Dropdown3 />
          </Route>
          <Route exact path="/dropdown-11">
            <Navbar2 />
            <Dropdown11 />
          </Route>
          <Route exact path="/dropdown-22">
            <Navbar2 />
            <Dropdown22 />
          </Route>
          <Route exact path="/dropdown-33">
            <Navbar2 />
            <Dropdown33 />
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
