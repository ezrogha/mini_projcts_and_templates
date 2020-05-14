import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as Styled from "./css/main";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavigationBar from "./components/NavigationBar";
import "./css/main.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    document.title = "HBT Hotel";
    this.state = {};
  }

  render() {
    if(window.location.pathname === "/"){
      return <div><h1>WELCOME MY TEMPLATES AND MINI PROJECTS</h1></div>
    }
    return (
      <Styled.Body>
          <NavigationBar />

          <Route path="/HBT" exact component={Home} />
          <Route path="/HBT/about" component={About} />
          <Route path="/HBT/contact" component={Contact} />
          <Styled.Footer>Hotel BT © 2019, All RIghts Reserved</Styled.Footer>
      </Styled.Body>
    );
  }
}
