import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
