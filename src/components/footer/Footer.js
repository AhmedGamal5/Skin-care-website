import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  LinkIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className="footer-sec">
      <hr />

      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>amazone</span>
        </div>

        <div className="block">
          <div className="detail">
            <span>Contact Us</span>
            <div className="contact-detail">
              <LocationMarkerIcon className="contact-icon" />
              <span>111 North Avenue Orlando, FL 32801</span>
            </div>
            <div className="contact-detail">
              <PhoneIcon className="contact-icon" />
              <a href="tel: 352-306-4415">352-306-4415</a>
            </div>
            <div className="contact-detail">
              <InboxIcon className="contact-icon" />
              <a href="mailto:support@amazon.com">support@amazon.com</a>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Account</span>
            <div className="contact-detail">
              <LoginIcon className="contact-icon" />
              <span>Sign In</span>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Company</span>
            <div className="contact-detail">
              <UserIcon className="contact-icon" />
              <span>About Us</span>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="detail">
            <span>Resources</span>
            <div className="contact-detail">
              <LinkIcon className="contact-icon" />
              <span>Safety Privacy & Terms</span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span>Copyright ©2022 by Amazon, Inc. </span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
