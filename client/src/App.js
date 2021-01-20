import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Pricing from "./components/Pricing";
import Result from "./components/Result";
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Result />
    </Router>
  );
}

export default App;
