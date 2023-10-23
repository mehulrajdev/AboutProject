import React from "react";
import "./about.css";
const About = () => {
  let message = "The Professional Creative Team for Growth-up Works";
  return (
    <section className="bg-white px-0 py-8">
      <div className="container">
        <div className="bg-[#f1f2fa] rounded-[2rem] p-4 text-center ">
          <h2 className=" inline-block text-xs bg-[#f7f4ff] mb-[0.5rem] px-2.5 py-[5px] rounded-[5px] text-[#5842bc]">
            The Team Work
          </h2>
          <div className="col-md-12 text-center">
            <b className="text-[40px] leading-[52px]">Our </b>
            <b className="text-[40px] leading-[52px] leader">Leaders</b>
            <p className="leading-[3.5rem] text-[#212529]">{message}</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="team-item mb-32 mb-lg-0 ">
                <div className="h-[320px] rounded-2xl overflow-hidden relative">
                  <img
                    src="1.png"
                    className="w-full object-cover h-full"
                    alt="pic"
                  />
                  <div className="absolute left-0 bottom-0 w-full p-3 z-[5] flex justify-around">
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h6 className="text-[#6640f4] text-xl font-semibold">
                    Michael Edwards
                  </h6>
                  <small className="text-[#999]">CEO Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item mb-32 mb-lg-0 ">
                <div className="h-[320px] rounded-2xl overflow-hidden relative">
                  <img
                    src="2.png"
                    className="w-full object-cover h-full"
                    alt="pic"
                  />
                  <div className="absolute left-0 bottom-0 w-full p-3 z-[5] flex justify-around">
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h6 className="text-[#6640f4] text-xl font-semibold">
                    Bobby Kane
                  </h6>
                  <small className="text-[#999]">CTO</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item mb-32 mb-lg-0 ">
                <div className="h-[320px] rounded-2xl overflow-hidden relative">
                  <img
                    src="3.png"
                    className="w-full object-cover h-full"
                    alt="pic"
                  />
                  <div className="absolute left-0 bottom-0 w-full p-3 z-[5] flex justify-around">
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h6 className="text-[#6640f4] text-xl font-semibold">
                    Robert Downey
                  </h6>
                  <small className="text-[#999]">Project Manager</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item mb-32 mb-lg-0 ">
                <div className="h-[320px] rounded-2xl overflow-hidden relative">
                  <img
                    src="4.png"
                    className="w-full object-cover h-full"
                    alt="pic"
                  />
                  <div className="absolute left-0 bottom-0 w-full p-3 z-[5] flex justify-around">
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-tiktok"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="linkj me-1">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h6 className="text-[#6640f4] text-xl font-semibold">
                    Andrew Robertson
                  </h6>
                  <small className="text-[#999]">Marketing Lea </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default About;
