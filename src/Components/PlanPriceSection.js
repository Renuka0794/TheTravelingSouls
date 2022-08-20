import React from "react";
import { Grid } from "@mui/material";

export default function PlanPriceSection({ data }) {
  return (
    <div className="text-left px-5">
      <Grid container spacing={{ xs: 2, md: 2 }} direction="column">
        {data.map((priceItem) => (
          <Grid item key={priceItem.key} justifyContent="flex-start">
            <div className="flex align-content-center ">
              <p className="px-2">{priceItem.label} :</p>
              <p>{priceItem.value}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
