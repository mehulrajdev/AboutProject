import React from "react";

const About = () => {
    let message ='The Professional Creative Team for Growth-up Works'
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Our Leaders</h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
                <img src="" className="team-img" alt="pic"/>
                <h3>Bobby Kane</h3>
                <div className="team-info">
                    <p>CEO Founder</p>
                    <ul className="team-icon">
                        <li><a href=""></a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
