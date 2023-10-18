import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="mainSection1">
      <div className="absolute left-[calc(50%_-_40.87px)] bg-[#f7f4ff] w-[81.73px] h-[30.39px] text-xs text-[#5842bc] rounded-[5px] top-0">
        <div className="absolute left-[calc(50%_-_30.87px)] leading-[20.4px] flex items-center justify-center w-[62.12px] h-[15px] top-[7px]">Contact us</div>
      </div>
      <b className="absolute left-[calc(50%_-_122.98px)] leading-[52px] flex items-center justify-center w-[124.92px] h-[52px] top-[50.39px]">{`Get In `}</b>
      <b className="absolute leading-[52px] flex items-center justify-center w-[121.83px] h-[52px] left-[calc(50%_+_1.55px)] top-[50.39px]">Touch</b>
      <div className="weWillContact1">
        We will contact again after receive your request in 24h
      </div>
      <div className="divcontent">
        <div className="divcommunCard">
          <div className="divicon">
            <img className="mail3dpngIcon1" alt="" src="mail3d.png" />
          </div>
          <b className="heading53">contact@Iteck.com</b>
        </div>
        <div className="divcommunCard1">
          <div className="divicon1">
            <img className="map3dpngIcon1" alt="" src="map3d.png" />
          </div>
          <b className="heading54">58 Howard St, Toronto</b>
        </div>
        <div className="divcommunCard2">
          <div className="divicon2">
            <img className="msg3dpngIcon1" alt="" src="msg3d.png" />
          </div>
          <b className="heading55">(+23) 5535 68 68</b>
        </div>
      </div>
    </div>
  );
};

export default Contact;