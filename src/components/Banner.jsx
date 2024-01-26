import React, { useContext } from "react";
import bg_hero from "../assets/video/HeroBanner.mp4";
import "../css/banner.css";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const { pageLoaded } = useContext(AppContext);

  return (
    <div className="banner_container">
      <div className="video_bg">
        <video src={bg_hero} muted autoPlay={"autoplay"} loop />
      </div>
      <div className="banner_overlay">
        <span
          className={
            pageLoaded ? "banner_motto load_animation_1" : "banner_motto"
          }>
          Dive Into A Realm Of Clarity And
        </span>
        <span
          className={
            pageLoaded ? "banner_motto load_animation_2" : "banner_motto"
          }>
          Sustainability With Our Advanced
        </span>
        <span
          className={
            pageLoaded ? "banner_motto load_animation_3" : "banner_motto"
          }>
          Water Treatment Services
        </span>
      </div>
    </div>
  );
};

export default Banner;
