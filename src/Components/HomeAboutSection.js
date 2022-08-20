import React from "react";
import { Grid, Icon } from "@mui/material";
import "react-awesome-slider/dist/styles.css";
import PrayerFlag from "../assets/icons/prayerFlag.svg";
import Ladakh from "../assets/icons/ladakh.svg";
import CottageIcon from "@mui/icons-material/Cottage";
import HikingIcon from "@mui/icons-material/Hiking";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

export default function HomeAboutSection() {
  return (
    <Grid className="section about" container spacing={2} id="about">
      <Grid item xs={12} md={12}>
        <h4 className="">Explore With Us</h4>
      </Grid>
      <Grid
        className="px-5 py-10"
        container
        spacing={2}
        justifyContent={"center"}
      >
        <Grid item md={2} xs={4} justifyContent={"center"}>
          <a href={"/#weekend-trips"}>
            <HikingIcon className="icon icon-md" />
            <p className="text-xl">Weekend Trips</p>
          </a>
        </Grid>
        <Grid item md={2} xs={4}>
          <FamilyRestroomIcon className="icon icon-md" />
          <p className="text-xl">Customized Trips</p>
        </Grid>
        <Grid item md={2} xs={4}>
          <CottageIcon className="icon icon-md" />
          <p className="text-xl">Workaction Stays</p>
        </Grid>
        <Grid item md={2} xs={4}>
          <a href={"/#expeditions"}>
            <Icon className="icon icon-md icon-contents">
              <img src={Ladakh} alt="ladakh" />
            </Icon>
          </a>
          <p className="text-xl">Leh Ladakh & Zanskar</p>
        </Grid>
        <Grid item md={2} xs={4}>
          <Icon className="icon icon-md icon-contents">
            <img src={PrayerFlag} alt="flag icon" />
          </Icon>
          <p className="text-xl">Spiti Tours</p>
        </Grid>
      </Grid>
    </Grid>
  );
}
