import React, { Component } from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import Home from './components/Home'
import About from './components/About'
import Article from './components/Article'

import Logo from './img/logo.png';
import LogoLight from './img/logo_light.png';

import Styles from './css/main.module.css'
import { NavLink, BrowserRouter, Route } from 'react-router-dom';

export default class index extends Component {
  constructor(props) {
    super(props)
    document.title = "NewsGrid"
    this.state = {
       
    }
  }
  
  render() {
    const { body, navbar, social, navItems, logo, container, bg_dark, bg_primary, footer, bg_secondary, btn } = Styles
    return (
      <BrowserRouter>
        <div className={body}>
          {/* NAVIGATION */}
          <nav id={navbar}>
            <div className={container}>
              <img src={Logo} className={logo} />
              <ul className={social}>
                <li><a href="" target="_blank"><FaFacebookSquare /></a></li>
                <li><a href="" target="_blank"><FaInstagram /></a></li>
                <li><a href="" target="_blank"><FaTwitter /></a></li>
                <li><a href="" target="_blank"><FaYoutube /></a></li>
              </ul>
              <ul className={navItems}>
                <li><NavLink exact activeClassName={bg_primary} to="/NewsGrid/">Home</NavLink></li>
                <li><NavLink activeClassName={bg_primary} to="/NewsGrid/about">About</NavLink></li>
              </ul>
            </div>
          </nav>

          <Route path="/NewsGrid/" exact component={Home} />
          <Route path="/NewsGrid/about" component={About} />
          <Route path="/NewsGrid/article" exact component={Article} />

          <footer id={footer} className={bg_dark}>
            <div className={container}>
              <div>
                <img src={LogoLight} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum vitae.</p>
              </div>

              <div>
                <h3>EMAIL NEWLETTER</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input type="email" placeholder="Enter Email..." />
                <input className={`${btn} ${bg_primary}`} type="submit" value="Subcribe" />
              </div>

              <div>
                <h3>SITE LINKS</h3>
                <ul>
                  <li>Help & Support</li>
                  <li>Privacy Policy</li>
                  <li>About Us</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h2>JOIN OUR CLUB</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nesciunt!</p>
                <input className={`${btn} ${bg_secondary}`} type="button" value="Join Now" />
              </div>

              <div>
                <p>Copyright © 2020, All Rights Reserved</p>
              </div>

            </div>
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}
