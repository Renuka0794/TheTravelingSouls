import React from "react";
import HeroSection from "../Components/HeroSection";
import HomeAboutSection from "../Components/HomeAboutSection";
import Background1 from "../assets/mountains.jpg"
import Background2 from "../assets/treesandhouse.jpg"
import SliderSection from "../Components/SliderSection";
import Gallery from "../Components/Gallery";
import Testimonial from "../Components/Testimonial";
import PackageContent from "../Components/PackageContent";
import { packageData } from "../data/pacakgeData";



export default function TripPackage() {

  const heroSectionData = [{ imglink: packageData.featuredImageLink, title: packageData.title, subtitle: packageData.subtitle}];
  return (
    <div className="w-full">
      <HeroSection withSlider={false} data={heroSectionData} height={'80vh'} />
      <PackageContent data={packageData} />
    </div>
  );
}
