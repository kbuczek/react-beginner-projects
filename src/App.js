import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayList from "./Projects/BirthdayList";
import MyNavbar from "./Projects/MyNavbar";
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
          <Route path="/my-navbar">
            <MyNavbar />
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
