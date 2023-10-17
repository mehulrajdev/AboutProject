import React from "react";
import styles from "./MainSection.module.css";

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
    <div className={styles.mainSection1}>
      <div className={styles.divcontainer1}>
        <div className={styles.small}>
          <div className={styles.theTeamWork1}>The Team Work</div>
        </div>
        <b className={styles.heading22}>{`Our `}</b>
        <b className={styles.heading23}>Leaders</b>
        <div className={styles.theProfessionalCreative1}>
          The Professional Creative Team for Growth-up Works
        </div>
        <div className={styles.divteamCard}>
          <div className={styles.linkHeading4}>Michael Edwards</div>
          <div className={styles.smallCeo}>CEO Founder</div>
          <div className={styles.divimg}>
            <img className={styles.jpegIcon} alt="" src="1.png" />
          </div>
        </div>
        <div className={styles.divteamCard1}>
          <div className={styles.linkHeading5}>Bobby Kane</div>
          <div className={styles.smallCto}>CTO</div>
          <div className={styles.divimg}>
            <img className={styles.jpegIcon} alt="" src="2.png" />
          </div>
        </div>
        <div className={styles.divteamCard2}>
          <div className={styles.linkHeading6}>Robert Downey Jr</div>
          <div className={styles.smallProject1}>Project Manager</div>
          <div className={styles.divimg}>
            <img className={styles.jpegIcon} alt="" src="" />
          </div>
        </div>
        <div className={styles.divteamCard3}>
          <div className={styles.linkHeading7}>Andrew Robertson</div>
          <div className={styles.smallMarketing1}>Marketing Leader</div>
          <div className={styles.divimg}>
            <img className={styles.jpegIcon} alt="" src="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
