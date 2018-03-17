import React, { Component } from 'react';
import './AboutUs.css';
import * as pageContent from './constants.js';

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us container">
        <div className="about-us-head text-center">{pageContent.ABOUT_US_H}</div>
        <div className="about-us-title text-center">{pageContent.ABOUT_US_T}</div>
        <div className="about-us-detail text-center row">

          <div className="about-us-detail-1 col-3" key="au-1">
            <div className="about-us-detail-h">{pageContent.ABOUT_US_1_H}</div>
            <div className="about-us-detail-i"></div>
            <div className="about-us-detail-t">{pageContent.ABOUT_US_1_T}</div>
          </div>

          <div className="about-us-detail-2 col-3" key="au-2">
            <div className="about-us-detail-h">{pageContent.ABOUT_US_2_H}</div>
            <div className="about-us-detail-i"></div>
            <div className="about-us-detail-t">{pageContent.ABOUT_US_2_T}</div>
          </div>

          <div className="about-us-detail-3 col-3" key="au-3">
            <div className="about-us-detail-h">{pageContent.ABOUT_US_3_H}</div>
            <div className="about-us-detail-i"></div>
            <div className="about-us-detail-t">{pageContent.ABOUT_US_3_T}</div>
          </div>

          <div className="about-us-detail-4 col-3" key="au-4">
            <div className="about-us-detail-h">{pageContent.ABOUT_US_4_H}</div>
            <div className="about-us-detail-i"></div>
            <div className="about-us-detail-t">{pageContent.ABOUT_US_4_T}</div>
          </div>

        </div>
        <div className="about-us-button text-center">
          <button type="button" className="btn btn-danger">Learn More</button>
        </div>
      </div>
    );
  }
}

export default AboutUs;
