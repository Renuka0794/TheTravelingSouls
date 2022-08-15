import React from "react";
import {Grid, ImageList,ImageListItem} from '@mui/material';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import ModeOfTravelTwoToneIcon from '@mui/icons-material/ModeOfTravelTwoTone';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PlanStepper from "./PlanStepper";
import PlanPriceSection from "./PlanPriceSection";
import PlanMoreInfo from "./PlanMoreInfo";

export default function PackageContent({ data }) {
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };


  return (
    <div className="section package-content text-center mt-10 mb-40">
      {
        data !== null && <>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="pb-10">
            <Grid container spacing={{ xs: 1, md: 1 }} >
                <Grid item md={4}>
                    <ScheduleTwoToneIcon  className="icon icon-sm" />
                    <p>Duration</p>
                    <p>{data.duration}</p>
                </Grid>
                <Grid item md={4}>
                    <CurrencyRupeeTwoToneIcon  className="icon icon-sm" />
                    <p>Starting Price</p>
                    <p>{data.startingPrice}</p>
                </Grid>
                <Grid item md={4}>
                    <ModeOfTravelTwoToneIcon  className="icon icon-sm" />
                    <p>Pick and Drop</p>
                    <p>{data.pickupAndDrop}</p>
                </Grid>
            </Grid>
    
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <div className="block pb-10">
            {/* Information Block */}
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="#fff"
              indicatorColor="primary"
              aria-label="secondary tabs example">
              <Tab label="About" value={0} />
              <Tab label="Itinerary" value={1} />
              <Tab label="Pricing" value={2} />
              <Tab label="More Info"  value={3} />
            </Tabs>
            <div className="py-10 pr-10">
                  {value === 0 &&
                    <div className='px-5'>
                      <p className="text-lg-left-sm-center text-xl">{data.about}</p>
                    </div>}
            {value === 1 && <PlanStepper steps={data.itinerary} />}
            {value === 2 && <PlanPriceSection data={data.prices} />}
            {value === 3 && <PlanMoreInfo data={data.prices} />}
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div>
          <h6 className="text-lg-left-sm-center mb-5">Photos</h6>
          <ImageList variant="masonry" cols={3} gap={5}>
            {data.photos.map((item) => (
              <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
            ))}
          </ImageList>
        </div>
        </Grid>
      </Grid>
        
        </>
      }
      
    </div>
  );
}



