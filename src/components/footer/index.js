import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-header">
      Copyright Barbara Potiriadis</div>
    <div className="contact-panel col-md-5">
      <div className="form-group">
        <div className="footer-text">
          <a href="mailto:barbarap095@gmail.com">barbarap095@gmail.com</a>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <div><a href="https://www.linkedin.com/in/barbara-potiriadis/">My LinkedIn</a><i className="linkedin icon"></i>
          </div>
          <div><a href="https://github.com/barbara095/">My Github</a><i className="github icon"></i></div>
          <div>Phone number: 0411 796 102
            <i className="fa fa-phone-square" aria-hidden="true"></i>
            <div className="content">
              Melbourne, VIC<i className="marker icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
