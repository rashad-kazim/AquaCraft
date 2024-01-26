import React from "react";
import commercial from "../assets/images/commercial.jpg";
import domestic from "../assets/images/domestic.jpg";
import eco from "../assets/images/eco.jpg";
import "../css/portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio_container">
      <div className="portfolio_header_container">
        <span className="portfolio_detail">Who We Serve</span>
        <span className="portfolio_header">Our Portfolio</span>
        <div className="header_line"></div>
      </div>
      <div className="portfolio_main">
        <div className="portfolio_card_1">
          <img src={commercial} alt="" />
          <div className="card_overlay">
            <span className="card_detail">Commercial</span>
            <div className="header_line"></div>
          </div>
        </div>
        <div className="portfolio_card_1">
          <img src={domestic} alt="" />
          <div className="card_overlay">
            <span className="card_detail">Domestic</span>
            <div className="header_line"></div>
          </div>
        </div>
        <div className="portfolio_card_1">
          <img src={eco} alt="" />
          <div className="card_overlay">
            <span className="card_detail">Eco Build</span>
            <div className="header_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
