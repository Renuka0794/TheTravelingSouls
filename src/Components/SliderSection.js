import React from "react";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrow: false,
        button: false,
        dots: true,
      },
    },
  ],
};

export default function SliderSection({ title, id, data = [], props = {} }) {
  return (
    <div className="section slider" id={id}>
      <h6 className="slider-title">{title}</h6>
      <Slider {...settings}>
        {data.map((dataItem) => (
          <Link to={`/package/${dataItem.key}`}>
            <Paper
              className={`trip-data-card-inner`}
              elevation={2}
              style={{ backgroundImage: `url(${dataItem.featuredImageLink})` }}
            >
              <div className="trip-data-card-inner-content left-col">
                <p className="text-xl title">{dataItem.title}</p>
                <p className="text-xl duration">{dataItem.duration}</p>
                <p className="text-xl price">{dataItem.cost}</p>
              </div>
              <div className="trip-data-card-inner-content right-col">
                <h6 className="mb-2">Batch Dates</h6>
                {dataItem.batchDates &&
                  dataItem.batchDates.map((batch, index) => (
                    <p className="text-xl date" key={index}>
                      {batch}
                    </p>
                  ))}
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
