import React from "react";
import "./Footer.css";
import logo from "../../../public/logo.webp";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerboxes">
          <img loading="lazy" className="footerlogo" src={logo} />
        </div>

        <div className="footerboxes">
          <div className="alignfooter">
            <h4 className="footertitle">COLLECTIONS</h4>
            <p>Home</p>
            <p>All Products</p>
            <p>Bracelets</p>
            <p>Earrings</p>
            <p>Pendants</p>
            <p>Rings</p>
          </div>
        </div>

        <div className="footerboxes">
          <div className="alignfooter">
            <h4 className="footertitle">OUR POLICE'S</h4>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Terms of Service</p>
            <p>Earrings</p>
            <p>Shipping Policy</p>
            <p>Contact Information</p>
          </div>
        </div>

        <div className="footerboxes">
          <div className="alignfooter">
            <h4 className="footertitle">GET IN TOUCH</h4>
            <p>Phone number: +919725809848 </p>
            <p>Email: contact@rabbitojewels.com</p>
            <p>
              Physical address: B-401, coreland luxuria, Jagir ni Vadi, Near
              Ramkatha Road, 395004 Surat GJ, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
