// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Route exact path="/home" component={Home} />
        <Route exact path="/port" component={Portfolio} />
        <Route exact path="/res" component={Resume} />
        <Route exact path="/cont" component={Contact} />
      </Router>
    );
  }
}

export default App;
