import React, { useEffect } from "react";
import HomeAboutSection from "../Components/HomeAboutSection";
import HomeBanner from "../Components/HomeBanner";
import UpcomingTripsSection from "../Components/UpcomingTripsSection";

export default function Home() {
  return (
    <div className="w-full">
      <HomeBanner />
      <HomeAboutSection />
      <UpcomingTripsSection />
    </div>
  );
}
