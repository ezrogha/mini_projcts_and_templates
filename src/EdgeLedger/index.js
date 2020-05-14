import React, { Component } from 'react';
import { FaBookOpen, FaUniversity, FaBookReader, FaPencilAlt } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import logo2 from './img/logos/logo2.png'
import logo3 from './img/logos/logo3.png'
import logo4 from './img/logos/logo4.png'
import logo5 from './img/logos/logo5.png'
import logo6 from './img/logos/logo6.png'

import Styles from './css/main.module.css';
import './css/mobile.module.css'
import './css/main.css';

export default class index extends Component {
  constructor(props) {
    super(props)
    document.title = "EdgeLedger Financial | Accounting & Investment"
    this.state = {
       
    }
  }
  
  render() {
    const { body, navbar, bg_primary, heading1, heading2, text_primary, showcase, showcase_content, what, what_items, what_item, what_icon, container, what_content, what_header, who, who_content, who_image, bg_dark, clients, contact, form, map } = Styles

    return (
      <div className={body}>
        <nav id={navbar}>
          <h1 className={heading2}>
            <span className={text_primary}><FaBookOpen /> Edge</span>Ledger
          </h1>
          <ul>
            <li><AnchorLink href="#home">Home</AnchorLink></li>
            <li><AnchorLink href="#what">What</AnchorLink></li>
            <li><AnchorLink href="#who">Who</AnchorLink></li>
            <li><AnchorLink href="#contact">Contact</AnchorLink></li>
          </ul>
        </nav>

        <header id="home" className={showcase}>
          <div className={showcase_content}>
            <h1 className={`${heading1}`}>The Sky Is The Limit</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus debitis praesentium inventore, eum deserunt.</p>
            <a className={bg_primary} href="#">Read More</a>
          </div>
        </header>  

        {/* What we do */}
        <section id="what"
        className={what}>
          <div className={container}>
            <h1 className={what_header}><span className={text_primary}>What</span> We Do</h1>
            <div className={what_items}>
              <div className={what_item}>
                <div className={what_icon}>
                  <FaUniversity />
                </div>
                <div className={what_content}>
                  <h1>Investment Banking</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
                </div>
              </div>

              <div className={what_item}>
                <div className={what_icon}>
                  <FaBookReader />
                </div>
                <div className={what_content}>
                  <h1>Portfolio Management</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
                </div>
              </div>

              <div className={what_item}>
                <div className={what_icon}>
                  <FaPencilAlt />
                </div>
                <div className={what_content}>
                  <h1>Tax & Custodial</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We are */}
        <section id="who" className={who}>
          <div className={who_image}></div>
          <div className={`${who_content} ${bg_dark}`}>
            <h1><span className={text_primary}>Who</span> We Are</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora culpa harum voluptas ratione enim consequuntur illo, atque, aut doloribus unde repellendus sit delectus beatae aspernatur placeat corrupti. Ipsa, itaque quas</p>
            <h2>Our Team</h2>
            <ul>
              <li>Mark Smith: CEO</li>
              <li>Shannon Johnson: CFO</li>
              <li>John Corbit: Lead Accountant</li>
              <li>Janet Williams: Investment Manager</li>
              <li>Kara Jackson: Senior Accountant</li>
            </ul>
          </div>
        </section>


        {/* Our Clients */}
        <section id={clients}>
          <div className={container}>
            <h1><span className={text_primary}>Our</span> Clients</h1>
            <div>
              <img src={logo2} alt="Logo2" />
              <img src={logo3} alt="logo3" />
              <img src={logo6} alt="logo6" />
              <img src={logo4} alt="logo4" />
              <img src={logo5} alt="logo5" />
            </div>
          </div>
        </section>


        {/* Contact */}
        <section id="contact" className={contact}>
          <div className={`${form} ${bg_primary}`}>
            <h1>Contact Us</h1>
            <p>Please use the form below to contactus</p>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Enter name" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="Enter email" />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="text" placeholder="Enter phone" />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Enter phone" />
            </div>
            <button className={bg_dark}>Send</button>
          </div>
          <div className={map} id="map">
            <div>
              <h1>MAP</h1>
            </div>
          </div>
        </section>


        {/* Footer */}
      <footer>
        Copyright © 2020, EdgeLedger, All Rights Reserved
      </footer>
      </div>
    )
  }
}
