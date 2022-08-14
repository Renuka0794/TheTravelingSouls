import React from "react";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrow: false,
        button: false,
        dots:true
      }
    },
  ]
};


export default function SliderSection({title,id}) {
  return (
    <div className="section slider" id={id}>
      <h6 className="slider-title">{title}</h6>
      <Slider {...settings}>
        {data.map((dataItem) => (
          <Link to="/package">
         
          <Paper className="trip-data-card-inner" elevation={2}>
            <div className="trip-data-card-inner-content">
            <p className="text-xl title">{dataItem.title}</p>
            <p className="text-xl price">{dataItem.price}</p>
            <p className="text-xl duration">{dataItem.duration}</p>
            <p className="text-xl date">{dataItem.cost}</p>
            </div>
          </Paper>
          </Link>
        ))}
     </Slider>
      <Link to="/">
        <p className="text-center">See More</p>
      </Link>
    </div>
  );
}
