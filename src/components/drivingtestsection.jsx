import React from "react";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

import TrafficSignalImage from "../../src/assets/trafficsignalimage.png";

import DriverImage from "../../src/assets/driverimageuk.png";

import { Box } from "@mui/material";

import "./SecondSection.css";

const DrivingTestSection = () => {
  return (
    <div style={{marginTop:"5%"}}>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={6}>
          <img
            src={TrafficSignalImage}
            alt="Image"
            style={{ display: "flex", marginLeft: "9%" }}
          />

          <Typography
            sx={{
              position: "absolute",

              left: "37%",

              color: "#5C5F5E",

              textAlign: "end",

              width: "622px",

              fontStyle: "Gilroy-Bold",

              fontSize: "40px",
            }}
          >
            Passing your d
            <span
              style={{
                color: "white",
                fontStyle: "Gilroy-Bold",
                fontSize: "40px",
                wordSpacing: "4px",
              }}
            >
              riving test and
            </span>
            <span
              style={{
                color: "rgba(59, 74, 69, 1)",
                fontStyle: "Gilroy-Bold",
                fontSize: "40px",
              }}
            >
              {" "}
              becoming a{" "}
            </span>
            <span
              style={{
                marginRight: "2%",
                color: "rgba(59, 74, 69, 1)",
                fontStyle: "Gilroy-Bold",
                fontSize: "40px",
              }}
            >
              new
            </span>
            <span
              style={{
                color: "rgba(59, 74, 69, 1)",
                fontStyle: "Gilroy-Bold",
                fontSize: "40px",
              }}
            >
              d
              <span
                style={{
                  color: "white",
                  marginRight: "0%",
                  fontStyle: "Gilroy-Bold",
                  fontSize: "40px",
                  marginRight:"-1%"
                }}
              >
                river in the UK!
              </span>
            </span>
          </Typography>

          <Typography
            sx={{
              display: "flex",

              flexDirection: "column",

              justifyContent: "center",

              flexShrink: 0,

              color: "#5C5F5E",

              textAlign: "right",

              fontFamily: "Gilroy-Medium",

              fontSize: "16px",

              fontSize: "normal",

              fontWeight: 400,

              lineHeight: "32px",

              maxWidth: "678px",

              marginLeft: "16%",

              marginTop: "25%",
            }}
          >
            Our team consists of experienced developers, parking enforcement
            specialists, and industry experts who are passionate about
            delivering innovative solutions that address real-world parking
            enforcement challenges. We work closely with our clients to
            understand their unique needs and develop tailored solutions that
            meet their specific requirements.
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <img
            src={DriverImage}
            alt="Image"
            style={{ display: "flex", marginLeft: "10%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DrivingTestSection;
