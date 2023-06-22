import React from "react";
import "../styles/Footer.css";
import youtube from "../images/youtube.png";
import facebook from "../images/facebook (2).png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter (3).png";
import questionicon from "../images/question mark.png";
import lockcard from "../images/lock card.png";
import appstore from "../images/app store.png";
import googleplay from "../images/goggle play.png";

const Footer = () => {
  return (
    <div className="">
      <div className="footer container p-4 mt-3">
        <div className=" d-md-flex d-lg-flex justify-content-between mb-3">
          <div className="d-md-flex gap-5 top">
            <div className="d-lg-flex align-items-center gap-2">
              <img className="red-icon mb-1 one" src={lockcard} alt="" />
              <span className="shift-left">
                <h2 className="one mb-0">100%</h2>
                <h4 className="smaller-1 two">Payment Secured</h4>
              </span>
            </div>
            <div className="d-lg-flex align-items-center gap-3">
              <img className="red-icon three" src={questionicon} alt="" />
              <h2 className="four">
                24/7 <p className="smaller-1 mb-0">Support</p>
              </h2>
            </div>
          </div>
          <div className="app mb-3 d-flex gap-3">
            <img className="img-fluid" src={appstore} alt="" />
            <img className="img-fluid" src={googleplay} alt="" />
          </div>
        </div>
        <h3 className="help six mb-3">Need Help</h3>
        <a className="link six mb-3" href="#">
          +234 907 466 6655{" "}
        </a>{" "}
        <br />
        <a className="link seven " href="#">
          Help@jazzyburger.com
        </a>
        <h2 className="follow eight mt-4 mb-4">FOLLOW US</h2>
        <div className="socials d-flex  gap-2 ">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
      <div className="bg-light text-dark text-center last">
        <p> &copy; JJB Concepts . Developed by our Digital LLC</p>
      </div>
    </div>
  );
};

export default Footer;
