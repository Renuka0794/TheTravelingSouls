import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import CubeAnimation from "react-awesome-slider/dist/custom-animations/cube-animation.css";

// scaleOutAnimation fallAnimation cubeAnimation openAnimation foldOutAnimation

export default function HeroSection({ withSlider, data, height = "100vh" }) {
  if (!withSlider) {
    return (
      <div
        className="w-full hero-section-inner flex justify-center items-center content-center parallax"
        style={{
          backgroundImage: `url(${data[0].imglink})`,
          height,
        }}
      >
        <div className="h-auto max-h-[50%] ">
          <h3>{data[0].title}</h3>
          <h5>{data[0].subtitle}</h5>
        </div>
      </div>
    );
  }

  if (withSlider) {
    return (
      <AwesomeSlider
        animation="cubeAnimation"
        cssModule={[CoreStyles, CubeAnimation]}
        bullets={false}
        className="hero-section-slider"
      >
        {data.map((dataItem) => (
          <div
            className="w-full hero-section-inner flex justify-center items-center content-center"
            style={{ backgroundImage: `url(${dataItem.imglink})` }}
          >
            <div className="h-auto max-h-[50%]">
              <h3>{dataItem.title}</h3>
              <h5>{dataItem.subtitle}</h5>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    );
  }
}
