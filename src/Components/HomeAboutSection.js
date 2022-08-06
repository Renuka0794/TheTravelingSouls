import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, SvgIco, Icon } from "@mui/material";
import { Link } from "react-router-dom";


import "react-awesome-slider/dist/styles.css";
import PrayerFlag  from "../assets/icons/prayerFlag.svg";
import Ladakh  from "../assets/icons/ladakh.svg";
import CottageIcon from '@mui/icons-material/Cottage';
import HikingIcon from '@mui/icons-material/Hiking';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

export default function HomeAboutSection() {
  return (
    <Grid className="px-20 py-10" container spacing={2} bg-white>
      <Grid item xs={12} md={12}>
        <h4 className="">Explore With Us</h4>
        <Grid
          className="px-20 py-10"
          container
          spacing={2}
          justifyContent={"center"}
        >
          <Grid item md={2} justifyContent={"center"}>
            <a href={'/#weekend-trips'}>
            <HikingIcon className="icon icon-md"/>
             <p className="text-xl">Weekend Trips</p>
            </a>
            
          </Grid>
          <Grid item md={2}>
            <FamilyRestroomIcon className="icon icon-md"/>
          <p className="text-xl">Customized Trips</p>
          </Grid>
          <Grid item md={2}>
            <CottageIcon className="icon icon-md"/>
          <p className="text-xl">Workaction Stays</p>
          </Grid>
          <Grid item md={2}>
          <a href={'/#expeditions'}>
            <Icon  className="icon icon-md icon-contents">
              <img src={Ladakh} alt="ladakh"/>
              </Icon>
              </a>
          <p className="text-xl">Leh Ladakh & Zanskar</p>
          </Grid>
          <Grid item md={2}>
            <Icon  className="icon icon-md icon-contents">
            <img src={PrayerFlag}/>
            </Icon>
            <p className="text-xl">Spiti Tours</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
