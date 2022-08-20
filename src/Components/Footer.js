import React from "react";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
    <Grid className="px-10 py-5 bg-white footer" container spacing={2}>
      <Grid item xs={12} md={6}>
        <h6 className="text-slate-800">The Traveling Souls</h6>
        <p className="inline text-slate-600">
          Contact:{" "}
          <a
            className="text-slate-800"
            href="whatsapp://send?text=Hello. I got your contact from your website.!&phone=+919910859297"
          >
            +91-9910859297
          </a>
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid className="" container spacing={2}>
          <Grid item xs={3} md={3}>
            <a
              href="mailto: thetravelingsoulsss@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon className="black-icon icon-xs" />
            </a>
            <p>Email</p>
          </Grid>
          <Grid item xs={3} md={3}>
            <a
              href="https://www.youtube.com/channel/UCh72hhJb5F0hD3-WH9xzcLA"
              target="_blank"
              rel="noreferrer"
            >
              <YouTubeIcon className="black-icon icon-xs" />
            </a>
            <p>Youtube</p>
          </Grid>
          <Grid item xs={3} md={3}>
            <a
              href="https://www.instagram.com/the__traveling__souls "
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="black-icon icon-xs" />
            </a>
            <p>Instagram</p>
          </Grid>
          <Grid item xs={3} md={3}>
            <a
              href="https://www.facebook.com/thetravelinggsouls"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="black-icon icon-xs" />
            </a>
            <p>Facebook</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
