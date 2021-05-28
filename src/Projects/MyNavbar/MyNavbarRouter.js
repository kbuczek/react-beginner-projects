import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "../../Error.js";
import Option1 from "./Option1";
import Option2 from "./Option2";
import MyNavbar from "./MyNavbar";
import StartPage from "./StartPage";
import Action from "./Action";
import SeparatedLink from "./SeparatedLink";
import Option3 from "./Option3";
function MyNavbarRouter() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/my-navbar/">
            <StartPage />
          </Route>
          <Route exact path="/my-navbar/option1">
            <Option1 />
          </Route>
          <Route exact path="/my-navbar/option2">
            <Option2 />
          </Route>
          <Route exact path="/my-navbar/action">
            <Action />
          </Route>
          <Route exact path="/my-navbar/separated-link">
            <SeparatedLink />
          </Route>
          <Route exact path="/my-navbar/option3">
            <Option3 />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default MyNavbarRouter;
