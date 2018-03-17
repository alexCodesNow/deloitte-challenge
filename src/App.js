import React, { Component } from 'react';
import './App.css';
import * as pageContent from './constants.js';
import { Button } from 'reactstrap';
import AboutUs from './AboutUs.js';
import GetBeer from './GetBeer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">

          <header>
            <div className="header-icon"></div>

            <nav className="float-right">
              <ul>
                <li>Beers</li>
                <li>Breweries</li>
                <li>Submit a Find</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>

          <div className="app-header-title">
            Discovering beer<br/>just got easier
          </div>
          <button type="button" className="app-header-button btn btn-primary">
            Learn More
          </button>

        </div>

        <div className="app-body">
          <GetBeer />
          <AboutUs />
        </div>

        <div className="app-footer">
          <footer>
            <div className="app-footer-left">
              <div className="footer-address">
                12345 Fremont Ave., Suite 1001,<br/> Seattle, WA 98100
              </div>
              <div className="footer-copyright">Copyright &copy; 2013 Beer’d, Inc</div>
            </div>

            <div className="footer-icon float-right"></div>
          </footer>
        </div>
      </div>
    );
  }

}

export default App;
