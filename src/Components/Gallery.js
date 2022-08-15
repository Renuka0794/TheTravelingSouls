import React from "react";
import {Grid, ImageList,ImageListItem} from '@mui/material';
import gallery from "../data/images";
export default function Gallery() {
  const itemData = gallery();
  return (
  
    <div className="section gallery text-center" id="gallery">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} className="pb-10">
          <h4>Gallery</h4>
        </Grid>
      </Grid>
      <div>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
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
    </div>
  );
}



