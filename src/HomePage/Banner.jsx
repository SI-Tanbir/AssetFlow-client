import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import img1 from "../assets/banner/banner1.webp";
import img2 from "../assets/banner/banner2.webp";
import { Link } from "react-router";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => (
  <div>
    <AutoplaySlider
      className="h-[600px]"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      bullets={false}
    >
      <div data-src={img2}>
        <div className="hero  min-h-screen text-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <Link to={'/hr-join'} className="btn text-3xl   btn-primary">Join as HR Mannager</Link>
            </div>
          </div>
        </div>
      </div>

      <div data-src={img1}>
        <div className="hero  min-h-screen text-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <Link  to={'/employee-join'} className="btn text-2xl   btn-primary">Join as an Employee</Link>
            </div>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  </div>
);

export default Banner;
