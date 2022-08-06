import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import HomeAboutSection from "../Components/HomeAboutSection";
import Background1 from "../assets/banner1.jpg"
import Background2  from "../assets/banner3.jpg"
import SliderSection from "../Components/SliderSection";


export default function Home() {

  const heroSectionData = [{ imglink: Background1, title: 'The Traveling Souls ', subtitle: 'Let your soul wander' },{ imglink: Background2, title: 'The Souls ', subtitle: 'Let your soul wander' }];
  return (
    <div className="w-full">
      {/* <HomeBanner /> */}
      <HeroSection withSlider={false} data={heroSectionData} />
      <HomeAboutSection />
      <SliderSection title="Weekend Trips" id={"weekend-trips"} />
      <SliderSection title="Expeditions" id={"expeditions"}/>
      
    </div>
  );
}
