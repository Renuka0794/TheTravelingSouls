import React from "react";
import Paper from "@mui/material/Paper";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Jibhi - Tirthan",
    date: "17th June",
    duration: "3Days/2Nights",
    cost: "Starting 8299 INR",
  },
  {
    title: "Manali - Baralacha La",
    date: "17th June",
    duration: "3Days/2Nights",
    cost: "Starting 8599 INR",
  },
  {
    title: "Spiti Full Circuit",
    date: "8th July",
    duration: "8Days/7Nights",
    cost: "Starting 22599 INR",
  },
  {
    title: "Jibhi - Tirthan",
    date: "17th June",
    duration: "3Days/2Nights",
    cost: "Starting 8299 INR",
  },
  {
    title: "Manali - Baralacha La",
    date: "17th June",
    duration: "3Days/2Nights",
    cost: "Starting 8599 INR",
  },
  {
    title: "Spiti Full Circuit",
    date: "8th July",
    duration: "8Days/7Nights",
    cost: "Starting 22599 INR",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export default function SliderSection({title,id}) {
  return (
    <div className="px-20 py-10" id={id}>
      <h6 className="text-left mx-20">{title}</h6>
      <Carousel
        responsive={responsive}
        className="trips-slider-container my-10"
        animation={"slide"}
        swipe={true}
        itemClass="trip-data-card"
        autoPlaySpeed={3000}
        autoPlay={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderButtonGroupOutside={true} 
      >
        {data.map((dataItem) => (
          <Paper className="trip-data-card-inner" elevation={2}>
            <div className="trip-data-card-inner-content">
            <p className="text-xl title">{dataItem.title}</p>
            <p className="text-xl price">{dataItem.price}</p>
            <p className="text-xl duration">{dataItem.duration}</p>
            <p className="text-xl date">{dataItem.cost}</p>
            </div>
            
          </Paper>
        ))}
      </Carousel>
      <Link to="/">
        <p className="text-center">See More</p>
      </Link>
    </div>
  );
}
