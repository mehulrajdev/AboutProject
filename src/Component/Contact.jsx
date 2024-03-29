import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container ">
      <section className="section-padding ">
        <div className="container">
          <div className="contact">
            <small className=" xs ">Contact us</small>
            <h2 className="git">
              <b>
                Get In<span className=" touch">Touch</span>
              </b>
            </h2>
            <p className="c24">
              We will contact again after receive your request in 24h
            </p>
          </div>
          <div className=" showall rounded-pill">
            <div className="show">
              <div className=" mmm">
                <img src="mail.png"></img>
              </div>
              <div className="text">
                <h5 className=" com">contact@Iteck.com</h5>
              </div>
            </div>
            <div className="show">
              <div className="mmm">
                <img src="map.png"></img>
              </div>
              <div className="text">
                <h5 className="com">58 Howard St, Toronto</h5>
              </div>
            </div>
            <div className="show">
              <div className="mmm">
                <img src="msg.png"></img>
              </div>
              <div className="text">
                <h5 className="com">(+23) 5535 68 68</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container">
          <div className="detail">
            <div className="row fill">
              <div className="col-lg-8">
                <form method="post" action="" className="form">
                  <p className="mark">The field is required mark as *</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="place form-group">
                        <input
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="place form-group">
                        <input
                          name="email"
                          placeholder="Email Address *"
                          className="form-control"
                          type="email"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="place form-group">
                        <input
                          name="phone"
                          placeholder="Phone Number (option)"
                          className="form-control"
                          type="tel"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="place form-group">
                        <input
                          name="webpage"
                          placeholder="Your Website (option)"
                          className="form-control"
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="place form-group">
                        <select
                          name="select"
                          value="How can we help?"
                          className="form-select"
                        >
                          <option value="how we help">
                            How can we help you?
                          </option>
                          <option value="1"> Option 1</option>
                          <option value="2"> Option 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          rows="10"
                          name="message"
                          placeholder="How can we help you?"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 two">
                      <div className="two_detail place form-check">
                        <input
                          type="checkbox"
                          id="flexCheckDefault"
                          className="form-check-input chek"
                        ></input>
                        <label
                          htmlFor="flexCheckDefault"
                          className="form-check-label small"
                        >
                          By submitting, I’m agreed to the
                          <a href="#" className="text-decoration-underline">
                            Terms &amp; Conditons
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 two">
                      <input
                        type="submit"
                        value="Send Your Request"
                        className="btn rounded-pill"
                      ></input>
                    </div>
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
