import React, { Component } from 'react';
import './App.css';
import * as pageContent from './constants.js';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">

          <header>
            <div className="header-icon"></div>

            <nav>
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
          <div class="row container">
            <div className="get-beer row">
              <div className="get-beer-info col-6">
                <div className="get-beer-info-1">{pageContent.BEER_INFO_TITLE}</div>
                <div className="get-beer-info-2">{pageContent.BEER_INFO_1}<br/>{pageContent.BEER_INFO_2}</div>
              </div>
              <form className="col-6">
                <label>
                  Name <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>


          <div className="about-us">
            <h1>What makes us different?</h1>
            <h2>WE’RE FOCUSED ON THE NEEDS OF BEER LOVERS.</h2>
            <div className="about-us-detail">
              <div>

              </div>
            </div>
          </div>
        </div>

        <div className="app-footer">
          <footer>
            <div className="footer-address">
              12345 Fremont Ave., Suite 1001,<br/> Seattle, WA 98100
            </div>
            <div className="footer-copyright">Copyright &copy; 2013 Beer’d, Inc</div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
