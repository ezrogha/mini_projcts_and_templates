import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Specializations from "./components/Specializations";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

export default class index extends Component {
  constructor(props) {
    super(props)
  
    document.title = "Portfolio"
  }
  
  state = {
    atHome: true
  }

  componentDidMount(){
    const atHome = window.location.pathname === "/" ? true : false
    this.setState({ atHome });
  }

  onChangeHeader = (atHome) => {
    this.setState({ atHome });
  }

  render() {
    return (
      <>
        {this.state.atHome ? <Header changeHeader={this.onChangeHeader} /> : <NavBar changeHeader={this.onChangeHeader} />}
        <Route path="/" exact component={Specializations} />
        <Route path="/about" exact component={About} />
        <Route path="/work" exact component={MyWork} />
        <Route path="/contact" exact component={Contact} />
        <Footer />
      </>
    );
  }
}
