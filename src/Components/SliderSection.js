import React from "react";
import { styled } from "@mui/material/styles";
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
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function SliderSection({title,id}) {
  return (
    <div className="px-20 py-10" id={id}>
      <h6 className="text-left mx-20">{title}</h6>
      <Carousel
        responsive={responsive}
        className="trips-slider-container mx-20 my-5"
        animation={"slide"}
        swipe={true}
      >
        {data.map((dataItem) => (
          <Paper className="trip-data-card">
            <p>{dataItem.title}</p>
            <p>{dataItem.price}</p>
            <p>{dataItem.duration}</p>
            <p>{dataItem.cost}</p>
          </Paper>
        ))}
      </Carousel>
      <Link to="/">
        <p className="text-center">See More</p>
      </Link>
    </div>
  );
}
