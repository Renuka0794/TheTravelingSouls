import React from "react";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const data = [
  {
    name: "Abhinash KS.",
    review:
      "I have been with the travelling souls since two trips now and prefer to join the upcoming trips too. It has been a great journey with them so far. I had the most adventurous trip of my life with travelling souls i.e. Jibhi and Tirthan valley. It could have been disastrous trip without them. Also, they have ideas and good knowledge of the underrated areas in Manali, Jibhi and many other areas which have amazing views.\nSo overall an amazing group of people and my friends lead this best trip organising group.",
    rating: 5,
  },
  {
    name: "Dhruv Goel",
    review:
      "The manali trip was my first trip with any travelling agency, it was amazing and worth every penny. The execution of trip was flawless. The most important thing is involvement of every member, and it didn't feel like, we all were meeting for first time. We all enjoyed so much. I will keep this agency on my first priority for any of my next trip.\nThank you travelling souls for this memorable trip.",
    rating: 5,
  },
  {
    name: "Drashti Maheshwari",
    review:
      "It was my first bachelor trip, and I haven't expected such a good ambience what these people have provided. Also the facilities including rooms and food is amazing. Also if you are planning to have real fun 😉 you can definitely give a try without any doubt.",
    rating: 5,
  },
  {
    name: "Archit Asthana",
    review:
      "I travelled recently with The Travelling Souls on a new year trip to Manali. The experience was awesome. Our organisers were so friendly, they made the trip real fun. The whole trip was so hassle free that you do not have to think about anything else rather than having fun. Huge shout-out to Ankit and Sahil for being such great travel coaches. Looking forward to travel again with them.",
    rating: 5,
  },
  {
    name: "Vaibhav gupta",
    review:
      "I travelled recently with The Travelling Souls on a trip to Manali. The experience was awesome. Our organisers were so friendly, they made the trip real fun.",
    rating: 5,
  },
  {
    name: "Ashka Singhal",
    review:
      "I had a great time on the trip. The group leaders Yogesh and Renuka were very friendly and ensured that we had a good and memorable trip.",
    rating: 5,
  },
  {
    name: "Disha Maheshwari",
    review:
      "I had my first Manali trip with these guys..and it's too good..no bhagm bhag...full on fun... amazing stays...You will not feel like you are going on trip with strangers....",
    rating: 5,
  },
  {
    name: "Rahul Kumar Gond",
    review:
      "Had an amazing trip with The Traveling Souls. They take care of everything from start to end and keep you entertained throughout the trip. I really loved the trip experience and looking forward to next trip soon !!!",
    rating: 5,
  },
  {
    name: "Ambika Sarin",
    review:
      "Love love Traveling Souls! Perfect blend of fun and decency! The trip was fun, adventurous, full of laughter, support, and comfort. 10/10 would love to join them again in future trips.",
    rating: 5,
  },
  {
    name: "Vigyey",
    review:
      "Management is gud, they also take your consideration during the trip which also gud, and they provide you the best experience.\n#thetravelingsouls",
    rating: 5,
  },
  {
    name: "Parul Singh",
    review:
      "This is not at all a “plz tag me” kind of review.. writing it on my own free will.\nBest bunch of people..had amazing experience with them. What i liked the most was the professionalism, responsible behaviour and thousands of jokes..",
    rating: 5,
  },
];

var settings = {
  dots: false,
  infinite: true,
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
        arrows: false,
      },
    },
  ],
};

function BasicCard({ details }) {
  return (
    <div className="testimonial-card-wrapper flex justify-center">
      <div className="testimonial-card flex flex-col bg-white">
        <Typography
          sx={{ fontSize: 14 }}
          color="body2"
          gutterBottom
          className="card-header"
        >
          {details.name}
        </Typography>

        <div>
          {Array(details.rating)
            .fill()
            .map((num, i) => (
              <StarIcon className="icon-xs black-icon" color="#fff" />
            ))}
          {Array(5 - details.rating)
            .fill()
            .map((num, i) => (
              <StarBorderIcon className="icon-xs black-icon" />
            ))}
        </div>

        <div className="px-4 pt-3 flex">
          <p className="text-lg">
            {details.review.substring(0, 300)}
            {details.review.length > 300 ? (
              <span className="text-blue-700">
                <a
                  href="https://www.google.com/search?q=the+traveling+souls&rlz=1C5CHFA_enIN955IN956&oq=the+traveling+souls&aqs=chrome..69i57j46i175i199i512j0i22i30l3j69i60l3.3893j0j7&sourceid=chrome&ie=UTF-8#lrd=0x390d1d2b9f6922bd:0xceecc9e9896c0f56,1,,,"
                  target="_blank"
                  rel="noreferrer"
                >
                  ... show more
                </a>
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <div
      className="section testimonial text-center mx-50 my-20"
      id="contact slick-light"
    >
      <h4 className="pb-10">Testimonial</h4>

      <Slider {...settings}>
        {data.map((dataItem) => (
          <BasicCard details={dataItem} />
        ))}
      </Slider>
    </div>
  );
}
