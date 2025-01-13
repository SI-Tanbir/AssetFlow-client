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
            <div className="max-w-[1000px] bg-black rounded-lg p-8">
              <h3 className=" text-6xl  text-blue-600 rounded-xl">Effortless Asset Management for HR Managers</h3>
              <p className=" text-3xl  text-orange-500 rounded-xl">Track, manage, and organize your company assets with ease.</p>
              {/* <Link to={'/hr-join'} className="btn text-2xl   ">Join Us</Link> */}
             

            </div>
          </div>
        </div>
      </div>

      <div data-src={img1}>
        <div className="hero  min-h-screen text-white">
          <div className="hero-content text-center">
            <div  className="max-w-[1000px] bg-black rounded-lg">

            <p className="text-3xl text-blue-700 p-4">Take control of your team's resources with our powerful asset tracking system. Optimize usage, monitor requests, and streamline approvals in one centralized platform."</p>
              {/* <Link  to={'/employee-join'} className="btn text-2xl   btn-primary">Join as an Employee</Link> */}
            </div>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  </div>
);

export default Banner;
