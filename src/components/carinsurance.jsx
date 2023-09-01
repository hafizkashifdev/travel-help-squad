import React from "react";
import { Grid, Typography } from "@mui/material";
import CarModel from "../../src/assets/carmodel.png";

const CardInsurance = () => {
  const sectionStyle = {
    position: "relative",
    minHeight: "842px",
  };

  const backgroundImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayTextStyle = {
    position: "absolute",
    zIndex: 1,
    top: "65%",
    left: "40%",
    transform: "translate(-50%, -50%)",
    color: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const overlayTextStyleone = {
    position: "absolute",
    zIndex: 1,
    top: "75%",
    left: "56%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const dotStyle = {
    color: "#21B07D",
    position: "relative",
    left: "-10px",
  };

  return (
    <Grid container sx={sectionStyle}>
      <div style={backgroundImgStyle}>
        <img
          src={CarModel}
          alt="Background"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={overlayTextStyle}>
        <Typography
          variant="h1"
          sx={{
            fontStyle: "Gilroy-Bold",
            fontSize: "40px",
            lineHeight: "46.88px",
            textAlign: "start",
          }}
        >
          Check different car insurance
          <br /> quotes determine if savings
          <br /> are possible <span style={dotStyle}>.</span>
        </Typography>
        {/* <Typography
          variant="h1"
          sx={{
            fontStyle: "Gilroy-Bold",
            fontSize: "40px",
            textAlign:"start"

          }}
        >
          quotes determine if savings
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontStyle: "Gilroy-Bold",
            fontSize: "40px",
            textAlign:"start"

          }}
        >
          are possible.
        </Typography> */}
      </div>
      <div style={overlayTextStyleone}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Gilroy-Medium",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#FFFFFFB2",
            textAlign: "start",
            color: "#FFFFFFB2",
          }}
        >
          Looking to compare car insurance quotes and potentially save on your
          premiums? You've come to the right
          <br />
          place! By comparing quotes from different providers, you can find the
          best deals and coverage options
          <br />
          that fit your needs and budget.
        </Typography>
        {/* <Typography
          variant="body1"
          sx={{
            fontFamily: "Gilroy-Medium",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#FFFFFFB2",
          }}
        ></Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Gilroy-Medium",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#FFFFFFB2",
          }}
        >
          that fit your needs and budget.
        </Typography> */}
      </div>
    </Grid>
  );
};

export default CardInsurance;
