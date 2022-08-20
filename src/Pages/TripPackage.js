import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import PackageContent from "../Components/PackageContent";
import { packages } from "../data/pacakgeData";
import { useParams } from "react-router-dom";

export default function TripPackage() {
  let { packageName } = useParams();
  const [currentPackageData, setCurrentPackageData] = useState(null);
  const [heroSectionData, setHeroSectionData] = useState([]);

  useEffect(() => {
    if (packageName) {
      setCurrentPackageData(packages[packageName]);
      setHeroSectionData([
        {
          imglink: packages[packageName].featuredImageLink,
          title: packages[packageName].title,
          subtitle: packages[packageName].subtitle,
        },
      ]);
    }
  }, [packageName]);

  return (
    <div className="w-full">
      {heroSectionData.length > 0 && (
        <HeroSection
          withSlider={false}
          data={heroSectionData}
          height={"80vh"}
        />
      )}

      {currentPackageData !== null && (
        <PackageContent data={currentPackageData} />
      )}
    </div>
  );
}
