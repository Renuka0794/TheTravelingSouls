import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "react-awesome-slider/dist/styles.css";
export default function HomeAboutSection() {
  return (
    <Grid className="px-20 py-10" container spacing={2}>
      <Grid item xs={12} md={12}>
        <p>Explore With Us</p>
        <Grid
          className="px-20 py-10"
          container
          spacing={2}
          justifyContent={"center"}
        >
          <Grid item md={2}>
            <p>Offbeat Destinations</p>
          </Grid>
          <Grid item md={2}>
            Wonderous Views
          </Grid>
          <Grid item md={2}>
            Cultures Of India
          </Grid>
          <Grid item md={2}>
            Food
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
