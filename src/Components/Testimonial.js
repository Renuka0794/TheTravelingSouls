import React from "react";
import Grid from "@mui/material/Grid";
export default function Testimonial() {
  return (
    <Grid className="px-10 pt-20 pb-40 section testimonial" container spacing={2}>
        <Grid item xs={12} md={12} className="pb-10">
        <h4 className="">Testimonial</h4>
      </Grid>
      <Grid item xs={3} md={3}>
        <p>Instagram</p>
      </Grid>
      <Grid item xs={3} md={3}>
        <p>Email</p>
      </Grid>
      <Grid item xs={3} md={3}>
        <p>Youtube</p>
      </Grid>{" "}
      <Grid item xs={3} md={3}>
        <p>Facebook</p>
      </Grid>
    </Grid>
  );
}
