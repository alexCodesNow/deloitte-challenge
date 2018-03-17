import React, { Component } from 'react';
import * as pageContent from './constants.js';
import { Button } from 'reactstrap';
import './GetBeer.css';

class GetBeer extends Component {
  render() {
    return (
      <div className="container">
        <div className="get-beer row">

          <div className="get-beer-info col-6">
            <div className="get-beer-info-1">{pageContent.BEER_INFO_TITLE}</div>
            <div className="get-beer-info-2">{pageContent.BEER_INFO_1}<br/>{pageContent.BEER_INFO_2}</div>
          </div>

          <form className="col-6">
            <div className="form-group">
              <label for="test1">What’s your favorite beer?</label>
              <input id="test1" className="form-control" placeholder="Jane Doe"/>
            </div>
            <div className="form-group">
              <label for="test2">How many times a week do you drink beer?</label>
              <select className="form-control" id="test2">
                <option value="" selected disabled>Select an option</option>
                <option value="">Once</option>
                <option value="">Once every couple of days</option>
                <option value="">Every day</option>
              </select>
            </div>
            <button type="submit" className="get-beer-btn btn btn-danger">Get Advice</button>
            <button type="submit" className="get-beer-btn btn btn-primary">Get a Beer</button>
          </form>

        </div>
      </div>
    )
  }
}

export default GetBeer;
