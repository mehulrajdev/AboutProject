import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8 style-4">
            <small className="text-xs bg-[#f7f4ff] text-[#5842bc] mb-5 px-2.5 py-[5px] rounded-[5px]">
              Contact us
            </small>
            <h2 className="m-10 text-4xl text-[#000]  ">
              <b>
                Get In<span className="m-2">Touch</span>
              </b>
            </h2>
            <p className="m-0 text-sm">
              We will contact again after receive your request in 24h
            </p>
          </div>
          <div className="rounded-pill border flex px-0 py-3 border-solid border-[#9993]">
            <div className="commun-card">
              <div className="mr-4 w-10 h-10">
                <img src="mail.png"></img>
              </div>
              <div className="text">
                <h5 className="text-xl text-black font-[bold] leading-[1.1] mb-0">
                  contact@Iteck.com
                </h5>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
    // <div className="mainSection1">
    //   <div className="absolute left-[calc(50%_-_40.87px)] bg-[#f7f4ff] w-[81.73px] h-[30.39px] text-xs text-[#5842bc] rounded-[5px] top-0">
    //     <div className="absolute left-[calc(50%_-_30.87px)] leading-[20.4px] flex items-center justify-center w-[62.12px] h-[15px] top-[7px]">
    //       Contact us
    //     </div>
    //   </div>
    //   <b className="absolute left-[calc(50%_-_122.98px)] leading-[52px] flex items-center justify-center w-[124.92px] h-[52px] top-[50.39px]">{`Get In `}</b>
    //   <b className="absolute leading-[52px] flex items-center justify-center w-[121.83px] h-[52px] left-[calc(50%_+_1.55px)] top-[50.39px]">
    //     Touch
    //   </b>
    //   <div className="weWillContact1">
    //     We will contact again after receive your request in 24h
    //   </div>
    //   <div className="divcontent">
    //     <div className="divcommunCard">
    //       <div className="divicon">
    //         <img className="mail3dpngIcon1" alt="" src="mail3d.png" />
    //       </div>
    //       <b className="heading53">contact@Iteck.com</b>
    //     </div>
    //     <div className="divcommunCard1">
    //       <div className="divicon1">
    //         <img className="map3dpngIcon1" alt="" src="map3d.png" />
    //       </div>
    //       <b className="heading54">58 Howard St, Toronto</b>
    //     </div>
    //     <div className="divcommunCard2">
    //       <div className="divicon2">
    //         <img className="msg3dpngIcon1" alt="" src="msg3d.png" />
    //       </div>
    //       <b className="heading55">(+23) 5535 68 68</b>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;
