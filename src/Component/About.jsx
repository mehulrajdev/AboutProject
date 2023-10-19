import React from "react";
import "./about.css";
const About = () => {
  // let message ='The Professional Creative Team for Growth-up Works'
  return (
    // <section className="section-white">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12 text-center">
    //         <h2 className="section-title">Our Leaders</h2>
    //         <p className="section-subtitle">{message}</p>
    //       </div>

    //       <div className="col-sm-6 col-md-4">
    //         <div className="team-item">
    //             <img src="1.png" className="team-img" alt="pic"/>
    //             <h3>Bobby Kane</h3>
    //             <div className="team-info">
    //                 <p>CEO Founder</p>
    //                 <ul className="team-icon">
    //                     <li><a href="#">
    //                         <i className="fab fa-twitter"></i>
    //                         </a></li>
    //                     <li><a href="#">
    //                         <i className="fab fa-facebook"></i>
    //                         </a></li>
    //                     <li><a href="#">
    //                         <i className="fa fa-twitter"></i>
    //                         </a></li>
    //                     <li><a href="#">
    //                         <i className="fa fa-twitter"></i>
    //                         </a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="mainSection1">
      <div className="divcontainer1">
        <div className="small">
          <div className="theTeamWork1">The Team Work</div>
        </div>
        <b className="heading22">{`Our `}</b>
        <b className="heading23">Leaders</b>
        <div className="theProfessionalCreative1">
          The Professional Creative Team for Growth-up Works
        </div>
        <div className="divteamCard">
          <div className="linkHeading4">Michael Edwards</div>
          <div className="smallCeo">CEO Founder</div>
          <div className="divimg">
            <img className="jpegIcon" alt="" src="1.png" />
          </div>
          <div className="social-icons">
            <a href="#" className="me-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-1">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="divteamCard1">
          <div className="linkHeading5">Bobby Kane</div>
          <div className="smallCto">CTO</div>
          <div className="divimg">
            <img className="jpegIcon" alt="" src="2.png" />
          </div>
        </div>
        <div className={.divteamCard2}>
          <div className={.linkHeading6}>Robert Downey Jr</div>
          <div className={.smallProject1}>Project Manager</div>
          <div className={.divimg}>
            <img className={.jpegIcon} alt="" src="3.png" />
          </div>
        </div>
        <div className={.divteamCard3}>
          <div className={.linkHeading7}>Andrew Robertson</div>
          <div className="smallMarketing1">Marketing Leader</div>
          <div className="divimg">
            <img className="jpegIcon" alt="" src="4.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
