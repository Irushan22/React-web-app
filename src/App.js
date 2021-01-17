import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nomatch from "./pages/Nomatch";
import Layout from "./components/Layout";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={SignUp} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route component={Nomatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
