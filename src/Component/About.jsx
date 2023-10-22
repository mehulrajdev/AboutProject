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
                    Bobby Kane
                  </h6>
                  <small className="text-[#999]">CEO Founder</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item mb-32 mb-lg-0 ">
                <div className="h-[320px] rounded-2xl overflow-hidden">
                  <img src="2.png" className="team-img" alt="pic" />
                  <div className="team-icon">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <h3>Bobby Kane</h3>
                  <div className="team-info">
                    <p>CEO Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item mb-32 mb-lg-0 ">
                <div className="h-[320px] rounded-2xl overflow-hidden">
                  <img src="3.png" className="team-img" alt="pic" />
                  <div className="team-icon">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>

                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <h3>Bobby Kane</h3>
                  <div className="team-info">
                    <p>CEO Founder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item mb-32 mb-lg-0 ">
                <div className="h-[320px] rounded-2xl overflow-hidden">
                  <img src="4.png" className="team-img" alt="pic" />
                  <div className="team-icon">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>

                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <h3>Bobby Kane</h3>
                  <div className="team-info">
                    <p>CEO Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   <div className="p-6">
    //     <div className="mainSection1">
    //       <div className="divcontainer1">
    //         <div className="absolute left-[calc(50%_-_54.2px)] bg-[#f7f4ff] w-[108.41px] h-[30.39px] text-xs text-[#5842bc] rounded-[5px] top-0">
    //           <div className="absolute left-[calc(50%_-_44.21px)] leading-[20.4px] flex items-center justify-center w-[88.75px] h-[15px] top-[7px]">
    //             The Team Work
    //           </div>
    //         </div>
    //         <b className="absolute left-[calc(50%_-_119.87px)] text-[40px] leading-[52px] flex items-center justify-center w-[82.11px] h-[52px] top-[50.39px]">{`Our `}</b>
    //         <b className="absolute left-[calc(50%_-_38.09px)] text-[40px] leading-[52px] flex items-center justify-center w-[158.29px] h-[52px] top-[50.39px] lead">
    //           Leaders
    //         </b>
    //         <div className="absolute left-[calc(50%_-_176.03px)] text-sm leading-[23.8px] text-[#212529] flex items-center justify-center w-[352.4px] h-[23.8px] top-[122.39px]">
    //           The Professional Creative Team for Growth-up Works
    //         </div>
    //         <div>
    //           <div
    //             className="
    // @apply absolute w-[calc(100%_-_907.5px)] bg-white h-[428.09px] rounded-[20px] left-[15px] right-[892.5px] top-[206.18px]"
    //           >
    //             <div className="absolute left-[calc(50%_-_61.78px)] leading-[21px] font-semibold flex items-center justify-center w-[123.95px] h-[21px] top-[360px]">
    //               Michael Edwards
    //             </div>
    //             <div className="absolute left-[calc(50%_-_40.66px)] text-[13px] leading-[22.1px] text-[#999] flex items-center justify-center w-[81.63px] h-4 top-96">
    //               CEO Founder
    //             </div>
    //             <div className="absolute w-[calc(100%_-_30px)] h-80 overflow-hidden rounded-[15px] top-[15px] inset-x-[15px]">
    //               <img
    //                 className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_116.25px)] w-[232.5px] h-80 object-cover"
    //                 alt=""
    //                 src="1.png"
    //               />
    //             </div>
    //             <div className="social-icons">
    //               <a href="#" className="me-1">
    //                 <i className="fab fa-twitter"></i>
    //               </a>
    //               <a href="#" className="me-1">
    //                 <i className="fab fa-facebook-f"></i>
    //               </a>
    //               <a href="#" className="me-1">
    //                 <i className="fab fa-nkedin-in"></i>
    //               </a>
    //               <a href="#">
    //                 <i className="fab fa-github"></i>
    //               </a>
    //             </div>
    //           </div>
    //           <div className="absolute w-[calc(100%_-_907.5px)] bg-white h-[428.09px] rounded-[20px] left-[307.5px] right-[600px] top-[206.18px]">
    //             <div className="absolute left-[calc(50%_-_43.39px)] leading-[21px] font-semibold flex items-center justify-center w-[87.11px] h-[21px] top-[360px]">
    //               Bobby Kane
    //             </div>
    //             <div className="absolute left-[calc(50%_-_13.66px)] text-[13px] leading-[22.1px] text-[#999] flex items-center justify-center w-[27.67px] h-4 top-96">
    //               CTO
    //             </div>
    //             <div className="absolute w-[calc(100%_-_30px)] h-80 overflow-hidden rounded-[15px] top-[15px] inset-x-[15px]">
    //               <img
    //                 className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_116.25px)] w-[232.5px] h-80 object-cover"
    //                 alt=""
    //                 src="2.png"
    //               />
    //             </div>
    //           </div>
    //           <div className="divteamCard2">
    //             <div className="absolute left-[calc(50%_-_64.89px)] leading-[21px] font-semibold flex items-center justify-center w-[130.07px] h-[21px] top-[360px]">
    //               Robert Downey Jr
    //             </div>
    //             <div className="smallProject1">Project Manager</div>
    //             <div className="absolute w-[calc(100%_-_30px)] h-80 overflow-hidden rounded-[15px] top-[15px] inset-x-[15px]">
    //               <img
    //                 className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_116.25px)] w-[232.5px] h-80 object-cover"
    //                 alt=""
    //                 src="3.png"
    //               />
    //             </div>
    //           </div>
    //           <div className="divteamCard3">
    //             <div className="nkHeading7">Andrew Robertson</div>
    //             <div className="smallMarketing1">Marketing Leader</div>
    //             <div className="absolute w-[calc(100%_-_30px)] h-80 overflow-hidden rounded-[15px] top-[15px] inset-x-[15px]">
    //               <img
    //                 className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_116.25px)] w-[232.5px] h-80 object-cover"
    //                 alt=""
    //                 src="4.png"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default About;
