import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BirthdayList from "./Projects/BirthdayList/BirthdayList";
import MyNavbarRouter from "./Projects/MyNavbar/MyNavbarRouter";
import Login from "./Projects/Login/Login";
import PasswordRecovery from "./Projects/Login/PasswordRecovery";
import Accordion from "./Projects/Accordion/Accordion";
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
          <Route exact path="/birthday-list">
            <BirthdayList />
          </Route>
          <Route exact path="/my-navbar">
            <MyNavbarRouter />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/login/password-recovery">
            <PasswordRecovery />
          </Route>
          <Route exact path="/accordion">
            <Accordion />
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
