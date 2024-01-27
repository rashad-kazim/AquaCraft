import React from "react";
import "../css/about.css";
import smteam from "../assets/images/smteam.jpg";

const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_main_header">
        <span>About Us</span>
        <div className="about_line"></div>
      </div>
      <div className="wh_we_are_content">
        <p>
          Founded in 1993 by Matthew Basil Downing, our company stands as a
          testament to three decades of unwavering commitment and excellence in
          the water solutions industry. As a family-owned and operated business,
          we take immense pride in our roots and the values that have shaped our
          journey.
        </p>
      </div>

      <div className="exp_container">
        <div className="content_header">
          <h2>Our Experience and Expertise</h2>
          <div className="about_line"></div>
        </div>
        <div className="exp_content">
          <span>
            Specializing primarily in water boreholes, we have evolved over the
            years to encompass a broad spectrum of expertise, now offering
            comprehensive solutions that include geothermal applications,
            soakaway systems, and pump installations. Matthew's visionary
            leadership has been instrumental in steering our company towards
            continuous growth and innovation. At the heart of our operations is
            a dedication to upholding exceptional standards. Whether it's the
            precision of our work or the relationships we cultivate with our
            clients, our focus remains on delivering excellence. Matthew's
            leadership ethos revolves around blending professionalism with a
            personal touch, ensuring that every project receives the meticulous
            care and attention it deserves.
          </span>
          <img src={smteam} alt="" />
        </div>
      </div>

      <div className="inter_container">
        <div className="inter_wrapper">
          <div className="content_header">
            <h2>Interests</h2>
            <div className="about_line"></div>
          </div>

          <div className="inter_content">
            <p>
              Looking ahead, our aspirations are anchored in a commitment to
              sustained growth and evolution. While we expand our services, our
              core values of family, reliability, and ethical practices remain
              unswerving. Our vision includes providing reliable and hassle-free
              services, custom-tailored to meet our customers' unique needs and
              timelines. As we stride into the future, we aim to carry forward
              the legacy of integrity and customer satisfaction that defines our
              company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
