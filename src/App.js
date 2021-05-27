import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayList from "./Projects/BirthdayList";
import Navbar from "./Projects/Navbar";
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
          <Route path="/birthday-list">
            <BirthdayList />
          </Route>
          <Route path="/navbar">
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
