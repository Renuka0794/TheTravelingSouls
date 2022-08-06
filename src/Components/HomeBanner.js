import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import CubeAnimation from "react-awesome-slider/dist/custom-animations/cube-animation.css";

// scaleOutAnimation
// fallAnimation
// cubeAnimation
// openAnimation
// foldOutAnimation

export default function HomeBanner() {
  return (
    <AwesomeSlider
      animation="cubeAnimation"
      cssModule={[CoreStyles, CubeAnimation]}
      bullets={false}
      className="home-banner-slider"
    >
      <div className="w-full home-banner banner flex justify-center items-center content-center">
        <div className="banner-inner h-auto max-h-[50%] ">
          <h3>The Traveling Souls</h3>
          <h5>Let your soul wander</h5>
        </div>
      </div>
      <div className="w-full home-banner-1 banner flex justify-center items-center content-center">
        <div className="banner-inner h-auto max-h-[50%] w-full">
          <h3>The Traveling Souls</h3>
          <h5>Let your wander</h5>
        </div>
      </div>
      <div className="w-full home-banner-2 banner flex justify-center items-center content-center">
        <div className="banner-inner h-auto max-h-[50%]">
          <h3>The Traveling Souls</h3>
          <h5>Let your wander</h5>
        </div>
      </div>
    </AwesomeSlider>
  );
}
