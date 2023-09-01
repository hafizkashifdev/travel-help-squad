import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LeftImage from "../assets/leftimage.png";
import RightImage from "../assets/rightimage.png";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const containerStyle = {
  position: "relative",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  display: "block",
}

const overlayStyle = {
  position: "absolute",
  top: "-24%",
  left: "6%",
  width: "50%", // Adjust the width as needed
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px", // Adjust the spacing from the left edge
  zIndex: 1,
};

const SecondSection = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <Grid container spacing={0} style={containerStyle}>
        <Grid item xs={12} lg={6}>
          <Box>
            <img src={LeftImage} alt="Logo" style={imageStyle} />
          </Box>
          <Box sx={overlayStyle}>
            <Typography
              variant="h1"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Gilroy-Bold",
                fontSize: "56px",
                fontStyle: "normal",
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              Your Ultimate{" "}
            </Typography>
            <Typography
              variant="H1"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Gilroy-Bold",
                fontSize: "56px",
                fontStyle: "normal",
                fontWeight: 700,
                textAlign: "left",
              }}
            >
              Driver's Platform{" "}
            </Typography>
            <br />
            <Typography
              variant="body"
              sx={{
                color: "rgba(255, 255, 255, 0.70)",
                fontFamily: "Gilroy-Bold",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 400,
                textAlign: "left",
                lineHeight: "32px",
              }}
            >
              A digital solution to meet driver's requirements
              <br /> through one single platform{" "}
            </Typography>
            <br />
            <Button
              variant="contained"
              sx={{
                display: "flex",
                padding: "0 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "6px",
                background: "#21B07D",
                width: "206px",
                height: "49px",
                borderRadius: "6px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Gilroy-SemiBold",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: "0.8px",
                }}
              >
                REGISTER/ LOGIN
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <img src={RightImage} alt="Logo" style={imageStyle} />
          </Box>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondSection;
