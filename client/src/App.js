import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Pricing from "./components/Pricing";
import Result from "./components/Result";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

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
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      <Result />
      <Footer />
    </Router>
  );
}

export default App;
