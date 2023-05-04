import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__row">
          <div className="col-md-3">
            <h3>CARS</h3>
            <ul>
              <li><a href="#">How to Buy</a></li>
              <li><a href="#">Sell your Car</a></li>
              <li><a href="#">Finance & Insurance</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>FINANCE & INSURANCE</h3>
            <ul>
              <li><a href="#">Finance Homepage</a></li>
              <li><a href="#">Car & Personal Finance</a></li>
              <li><a href="#">Loan Calculator</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>CARS</h3>
            <ul>
              <li><a href="#">Search For</a></li>
              <li><a href="#">Trucks & Machinery</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Turners Careers</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__container__two">
        <span>© 2022 Turners</span>
      </div>
    </footer>
  );
};

export default Footer;