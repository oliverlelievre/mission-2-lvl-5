import React from 'react';
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <h3>About Us</h3>
            <p>We are the leading car auction website in the country, bringing together buyers and sellers of new and used cars from all over.</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main Street, Anytown USA</p>
            <p>Email: info@auctioncars.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="col-sm-12 col-md-4">
            <h3>Follow Us</h3>
            <ul className="list-inline">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;