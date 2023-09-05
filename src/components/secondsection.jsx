import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import backgroundImage from "../assets/offers/hero-img.svg";
import colorburn from "../assets/colorburn.png";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import SearchOffer from "./our-offers/search-offer/search-offer";

const overlayStyle = {
  position: "absolute",
  left: "5.9%",
  width: "50%",
  top:"0%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "25px",
  zIndex: 1,
};

const dotStyle = {
  color: "#21B07D",
  position: "relative",
  left: "2px",
};
const SecondSection = () => {
  return (
    <>
    <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "100% auto", // Adjusted background size
      minHeight: "610px",
      position: "relative",
      zIndex: 1, 
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "610px",
        // background: "linear-gradient(262deg, #000 13.81%, rgba(0, 0, 0, 0.06) 106.26%)",
        background: "linear-gradient(262deg, rgba(0, 0, 0, 0.06) 13.81%, #000 106.26%)",

        // opacity: 0.4,
        // zIndex: 2, 
      }}
      />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <Box sx={overlayStyle}>
            <Typography
              variant="h1"
              sx={{
                color: "#FFFFFF",
                width:'100%',
                maxWidth:'551px',
                height:'69px',
                fontFamily: "Gilroy-Bold",
                fontSize: "56px",
                fontStyle: "normal",
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              Our Offerings{" "}
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "rgba(255, 255, 255, 0.70)",
                fontFamily: "Gilroy-Bold",
                fontSize: "20px",
                fontStyle: "normal",
                maxWidth:'563px',
                fontWeight: 400,
                textAlign: "left",
                lineHeight: "32px",
              }}
            >
             We try to get the best and most convenient options and <br/>deals for you through our one single comprehensive platform
            </Typography>
          
            <SearchOffer/>
          </Box>

          </Grid>
          <Grid item xs={12} >
          
          </Grid>
        </Grid>
       
      </Container>
      <Grid 
    
    >
   
    </Grid>
    </div>
   
    
     </>
  );
};

export default SecondSection;
