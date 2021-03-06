// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
// import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./style.css";

function App () {
    return (
      <Router
        basename={process.env.PUBLIC_URL}
        >
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/port" exact component={Portfolio} />
          <Route path="/res" exact component={Resume} />
          <Route path="/cont" exact component={Contact} />
        </div>
      </Router>
    );
  }

export default App;
