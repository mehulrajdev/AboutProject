import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="mainSection1">
      <div className="small">
        <div className="contactUs">Contact us</div>
      </div>
      <b className="heading22">{`Get In `}</b>
      <b className="heading23">Touch</b>
      <div className="weWillContact1">
        We will contact again after receive your request in 24h
      </div>
      <div className="divcontent">
        <div className="divcommunCard">
          <div className="divicon">
            <img className="mail3dpngIcon1" alt="" src="mail3d.png.png" />
          </div>
          <b className="heading53">contact@Iteck.com</b>
        </div>
        <div className="divcommunCard1">
          <div className="divicon1">
            <img className="map3dpngIcon1" alt="" src="map3d.png.png" />
          </div>
          <b className="heading54">58 Howard St, Toronto</b>
        </div>
        <div className="divcommunCard2">
          <div className="divicon2">
            <img className="msg3dpngIcon1" alt="" src="msg3d.png.png" />
          </div>
          <b className="heading55">(+23) 5535 68 68</b>
        </div>
      </div>
    </div>
  );
};

export default Contact;
