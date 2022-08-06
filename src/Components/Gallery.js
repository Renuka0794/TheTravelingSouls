import React from "react";
import Grid from "@mui/material/Grid";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function Gallery() {
  return (
    <Grid className="px-10 py-20  section gallery" container spacing={2}>
      <Grid item xs={12} md={12} className="pb-10">
        <h4>Gallery</h4>
      </Grid>
      <Grid container spacing={1} direction="row"
  justifyContent="center"
  alignItems="center">
      <Grid item xs={12} md={12} className="items-center flex px-20">
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
      </Grid>

      </Grid>

     
    </Grid>
  );
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1593118845043-359e5f628214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'ladakh',
  },
  {
    img: 'https://images.unsplash.com/photo-1592335355593-af6fec1ee911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'ladakh',
  },
  {
    img: 'https://images.unsplash.com/photo-1593118960299-4818285df788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'ladakh',
  },
  {
    img: 'https://images.unsplash.com/photo-1565610340067-73645dba2caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'ladakh',
  },
  {
    img: 'https://images.unsplash.com/photo-1628782379401-4fff9cdcbbfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpdGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    title: 'spiti',
  },
  {
    img: 'https://images.unsplash.com/photo-1532503344276-8f089fe4e51f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BpdGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    title: 'spiti',
  },
  
 
];
