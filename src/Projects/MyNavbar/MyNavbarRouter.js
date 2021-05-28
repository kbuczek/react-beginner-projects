import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "../../Error.js";
import Option1 from "./Option1";
import Option2 from "./Option2";
import MyNavbar from "./MyNavbar";

function MyNavbarRouter() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
        <Switch>
          {/* <Route exact path="/my-navbar/">
            <MyNavbar />
          </Route> */}
          <Route exact path="/my-navbar/option1">
            <Option1 />
          </Route>
          <Route exact path="/my-navbar/option2">
            <Option2 />
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
