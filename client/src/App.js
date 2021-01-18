import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Pricing from "./components/Pricing";
import Result from "./components/Result"

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exaxt path="/pricing">
          <Pricing />
        </Route>
      </Switch>
      <Result />
    </Router>
  );
}

export default App;
