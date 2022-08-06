import React from "react";
import Grid from "@mui/material/Grid";
export default function Footer() {
  return (
    <Grid className="px-10 py-5 bg-white footer" container spacing={2}>
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
