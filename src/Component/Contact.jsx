import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container ">
      <section className="section-padding ">
        <div className="container">
          <div className="text-center mb-8 ">
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
          <div className="  rounded-pill border flex px-0 py-3 border-solid border-[#9993]">
            <div className="show">
              <div className="mr-4 w-10 h-10">
                <img src="mail.png"></img>
              </div>
              <div className="text">
                <h5 className="text-xl text-black font-[bold] leading-[1.1] mb-0">
                  contact@Iteck.com
                </h5>
              </div>
            </div>
            <div className="show">
              <div className="mr-4 w-10 h-10">
                <img src="map.png"></img>
              </div>
              <div className="text">
                <h5 className="text-xl text-black font-[bold] leading-[1.1] mb-0">
                  58 Howard St, Toronto
                </h5>
              </div>
            </div>
            <div className="show">
              <div className="mr-4 w-10 h-10">
                <img src="msg.png"></img>
              </div>
              <div className="text">
                <h5 className="text-xl text-black font-[bold] leading-[1.1] mb-0">
                  (+23) 5535 68 68
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container">
          <div className="detail">
            <div className="row justify-center">
              <div className="col-lg-8">
                <form method="post" action="" className="form">
                  <p className="text-xs text-center mb-6 text-[#dc3545]">
                    The field is required mark as *
                  </p>
                  <div className="row">
                    <div className="col-lg-6"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </form>
              </div>
            </div>
            <img src="atrate.png" className="atrate"></img>
            <img src="downmail.png" className="dmail"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
