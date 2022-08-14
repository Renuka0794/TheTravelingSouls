import React from "react";
import {Grid} from '@mui/material';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BedIcon from '@mui/icons-material/Bed';

export default function PlanPriceSection({ data }) {

  return (
 <div className="text-left px-5">
  <Grid container spacing={{ xs: 2, md: 2 }} direction="column" >
    {data.map(priceItem =>
      <Grid item key={priceItem.key} justifyContent="flex-start">
      <div className="flex align-content-center ">
        {
          priceItem.key === 1 ? <SingleBedIcon className="icon icon-xs" /> :   priceItem.key === 2 ? <BedIcon className="icon icon-xs"/> : priceItem.key === 3 ?  <>
          <SingleBedIcon className="icon icon-xs"/>
          <BedIcon className="icon icon-xs"/>
        </>:
          <>
            <BedIcon className="icon icon-xs"/>
            <BedIcon className="icon icon-xs"/>
          </>
      }
      <p className="px-2">
        {priceItem.label} : 
      </p>
      <p>{priceItem.value}</p>
      </div>
    </Grid>)}
  </Grid>
 </div>)
}



